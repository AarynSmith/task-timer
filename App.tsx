import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Styles } from "./AppStyles";
import Timer, { defaultData, timerData } from "./components/Timer";

export default function App() {
  const [timers, setTimers] = useState<string[]>([]);
  const [timerMap, setTimersMap] = useState<Map<string, timerData>>(new Map());
  const [deleteButtons, setDeleteButtons] = useState<boolean>(false);

  const sortTimers = (a: string, b: string): number =>
    (timerMap.get(a)?.creationTime || 0) - (timerMap.get(b)?.creationTime || 0);

  const readTimersFromAsync = async () => {
    const allKeys = await AsyncStorage.getAllKeys();
    const t = allKeys.filter((v) => v.startsWith("@timers/"));
    console.log("Got " + t.length + " timers", t);
    const allTimers = await AsyncStorage.multiGet(t);
    console.log("Got timers data");
    setTimersMap(
      new Map<string, timerData>(
        allTimers.map(([k, v]) => [k, JSON.parse(v || "")])
      )
    );
    setTimers(t);
  };

  const addTimer = async (v: string) => {
    const key = `@timers/${v}`;
    const d = new Date();
    const time = d.getTime();
    AsyncStorage.setItem(
      key,
      JSON.stringify({
        ...defaultData,
        creationTime: time,
      })
    );
    const t = timers.slice();
    t.push(key);
    timerMap.set(key, {
      ...defaultData,
      creationTime: time,
    });

    setTimers(t.sort(sortTimers));
    setTimersMap(new Map(timerMap));
  };

  const deleteTimer = async (v: string) => {
    console.log("Deleting Timer: ", v);
    await AsyncStorage.removeItem(v);
    const t = timers.slice();
    setTimers(t.filter((k) => k != v));
  };
  useEffect(() => {
    readTimersFromAsync();
  }, []);

  return (
    <View style={Styles.appContainer}>
      <View style={Styles.timersContainer}>
        {timers.sort(sortTimers).map((v) => (
          <Timer
            key={v}
            id={v}
            delMode={deleteButtons}
            delete={async () => {
              await deleteTimer(v);
              readTimersFromAsync();
            }}
          />
        ))}
      </View>
      <View style={Styles.buttonRow}>
        {!deleteButtons ? (
          <TouchableOpacity
            style={Styles.appAddButton}
            onPress={() => {
              addTimer(uuidv4());
            }}
          >
            <Text style={Styles.appAddButtonText}>Add Timer</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={Styles.appDeleteButton}
          onPress={() => {
            setDeleteButtons(!deleteButtons);
          }}
        >
          <Text style={Styles.appDeleteButtonText}>
            {deleteButtons ? "Return" : "Delete Timers"}
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
