import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect, SetStateAction } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const initVal = 0;

export default function Counter() {
  const [counterValue, setCounterValue] = useState(initVal);
  const CounterStorage = useAsyncStorage("@counter");

  const readFromAsync = async () => {
    const item = await CounterStorage.getItem();
    setCounterValue(parseInt(item || initVal.toString()));
  };

  const writeToAsync = async (v: Number) => {
    await CounterStorage.setItem(v.toString());
    setCounterValue(v as SetStateAction<number>);
  };

  useEffect(() => {
    readFromAsync();
  }, []);

  return (
    <View style={styles.counter}>
      <TouchableOpacity
        onPress={() => {
          writeToAsync(counterValue + 1);
        }}
      >
        <Text style={styles.counterButtons}>+</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>{counterValue}</Text>
      <TouchableOpacity
        onPress={() => {
          writeToAsync(counterValue - 1);
        }}
      >
        <Text style={styles.counterButtons}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  counterText: {
    fontSize: 50,
  },
  counterButtons: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});
