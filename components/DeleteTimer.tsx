import { Pressable, Text, View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

import { Styles } from "../AppStyles";
import { timerData, defaultData } from "./Timer";

export default function DeleteTimer(props: { id: string }) {
  const [timer, setTimer] = useState<timerData>(defaultData);
  const TimerStorage = useAsyncStorage(props.id);
  const readTimerFromAsync = async () => {
    const val = await TimerStorage.getItem();
    var t = val ? JSON.parse(val) : defaultData;
    setTimer(t);
  };

  useEffect(() => {
    readTimerFromAsync();
  }, []);

  return (
    <View style={Styles.timerCard}>
      <Text>Name:</Text>
      <Text>{timer.name}</Text>
      <Pressable
        style={{
          ...Styles.timerButton,
          ...Styles.timerDeleteButton,
        }}
        onPress={() => {}}
      >
        <Text style={Styles.timerButtonText}>Delete</Text>
      </Pressable>
    </View>
  );
}
