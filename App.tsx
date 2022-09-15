import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

import Counter from "./components/Counter";
import Timer from "./components/Timer";

export default function App() {
  const [timers, setTimers] = useState<string[]>([]);
  const TimerStorage = useAsyncStorage("@timers");
  const readTimersFromAsync = async () => {
    const val = await TimerStorage.getItem();
    const t = JSON.parse(val || "[]");
    console.log("Got " + t.length + " timers");
    setTimers(t);
  };
  const writeTimersToAsync = async (v: string[]) => {
    console.log(`Writing ${v} to storage`);
    await TimerStorage.setItem(JSON.stringify(v));
    setTimers(v);
  };
  useEffect(() => {
    readTimersFromAsync();
  }, []);
  return (
    <View style={styles.container}>
      {/* <Counter /> */}
      {timers.map((v, i) => (
        <Timer key={i} id={v} />
      ))}
      <TouchableOpacity
        onPress={() => {
          const t = timers.slice();
          t.push(Math.floor(Math.random() * 100).toString());
          writeTimersToAsync(t);
        }}
      >
        <Text>Add Timer</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
