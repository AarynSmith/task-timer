import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { View, Button } from "react-native";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Styles } from "./AppStyles";
import Timer, { defaultData } from "./components/Timer";
import DeleteTimer from "./components/DeleteTimer";

export default function App() {
  const [timers, setTimers] = useState<string[]>([]);
  const [deleteButtons, setDeleteButtons] = useState<boolean>(false);

  const readTimersFromAsync = async () => {
    const allKeys = await AsyncStorage.getAllKeys();
    const t = allKeys.filter((v) => v.startsWith("@timers/"));
    console.log("Got " + t.length + " timers", t);
    setTimers(t);
  };

  const addTimer = async (v: string) => {
    const key = `@timers/${v}`;
    AsyncStorage.setItem(key, JSON.stringify(defaultData));
    const t = timers.slice();
    t.push(key);
    setTimers(t);
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
        {!deleteButtons
          ? timers.map((v, i) => (
              <Timer
                key={i}
                id={v}
                delete={async () => {
                  await deleteTimer(v);
                  readTimersFromAsync();
                }}
              />
            ))
          : timers.map((v, i) => <DeleteTimer key={i} id={v} />)}
      </View>
      <View style={Styles.buttonRow}>
        {!deleteButtons ? (
          <Button
            title="Add Timer"
            onPress={() => {
              addTimer(uuidv4());
            }}
          />
        ) : (
          <></>
        )}
        <Button
          title={deleteButtons ? "Return" : "Delete Timers"}
          color="#B00020"
          onPress={() => {
            setDeleteButtons(!deleteButtons);
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
