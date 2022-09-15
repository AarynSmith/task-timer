import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

interface timerData {
  startTime: Number;
  endTime: Number;
  name: String;
}
const defaultData: timerData = {
  startTime: 0,
  endTime: 0,
  name: "",
};
export default function Timer(props: { id: String }) {
  const [nameState, setNameState] = useState<Boolean>(true);
  const [nameInput, setNameInput] = useState("");
  const [timer, setTimer] = useState<timerData>(defaultData);
  const TimerStorage = useAsyncStorage("@timers/" + props.id);
  const readTimerFromAsync = async () => {
    const val = await TimerStorage.getItem();
    var t = val ? JSON.parse(val) : defaultData;
    setTimer(t);
  };
  const writeTimersToAsync = async (v: timerData) => {
    console.log(`Writing ${v} to storage`);
    await TimerStorage.setItem(JSON.stringify(v));
    setTimer(v);
  };
  useEffect(() => {
    readTimerFromAsync();
  }, []);
  useEffect(() => {});
  return (
    <View style={styles.timer}>
      <Text>Timer: {props.id}</Text>
      <TouchableOpacity
        onPress={() => {
          setNameState(!nameState);
        }}
      >
        <div>
          Name:
          {nameState ? (
            <Text>{timer.name}</Text>
          ) : (
            <input
              autoFocus
              onChange={(e) => {
                // console.log(e.target.value);
                setNameInput(e.target.value);
              }}
              // onTextInput={(e) => {
              //   console.log(e);
              // }}
              onKeyUp={(event) => {
                console.log(event);
                // if (event.type === "keydown") {
                if (event.nativeEvent.key === "Enter") {
                  console.log(nameInput);
                  writeTimersToAsync({
                    ...timer,
                    name: nameInput,
                  });
                  setNameState(!nameState);
                }
                // }
              }}
            />
          )}
        </div>
      </TouchableOpacity>
      <Text>Start: {timer.startTime.toString()}</Text>
      <Text>End: {timer.endTime.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    borderWidth: 1,
  },
});
