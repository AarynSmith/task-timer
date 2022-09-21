import {
  GestureResponderEvent,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

import { Styles } from "../AppStyles";
import DeleteTimer from "./DeleteTimer";
import { formatTime } from "../Utilities";

export interface timerData {
  name: string;
  seconds: number;
  running: boolean;
}
export const defaultData: timerData = {
  name: "Timer",
  seconds: 0,
  running: false,
};

export default function Timer(props: {
  id: string;
  delMode: boolean;
  delete: (event: GestureResponderEvent) => void;
}) {
  const [nameState, setNameState] = useState<Boolean>(true);
  const [nameInput, setNameInput] = useState("");
  const [timer, setTimer] = useState<timerData>(defaultData);
  const TimerStorage = useAsyncStorage(props.id);
  const readTimerFromAsync = async () => {
    const val = await TimerStorage.getItem();
    var t = val ? JSON.parse(val) : defaultData;
    setTimer(t);
  };
  const writeTimerToAsync = async (v: timerData) => {
    await TimerStorage.setItem(JSON.stringify(v));
    setTimer(v);
  };
  useEffect(() => {
    readTimerFromAsync();
  }, []);

  useEffect(() => {
    let interval: any = 0;
    if (timer.running) {
      interval = setInterval(() => {
        writeTimerToAsync({
          ...timer,
          seconds: timer.seconds + 1,
        });
      }, 1000);
    } else if (!timer.running && timer.seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  if (!props.delMode)
    return (
      <View style={Styles.timerCard}>
        {nameState ? (
          <TouchableOpacity
            style={Styles.timerNameRow}
            onPress={() => {
              setNameState(!nameState);
            }}
          >
            {/* <Text>Name: </Text> */}
            <Text>{timer.name}</Text>
          </TouchableOpacity>
        ) : (
          <View style={Styles.timerNameInput}>
            <TextInput
              style={Styles.timerNameTextInput}
              autoFocus
              defaultValue={timer.name}
              onChangeText={(e) => {
                setNameInput(e);
              }}
              onKeyPress={(event) => {
                if (event.nativeEvent.key === "Enter") {
                  writeTimerToAsync({
                    ...timer,
                    name: nameInput,
                  });
                  setNameState(!nameState);
                }
              }}
            />
          </View>
        )}
        {/* */}

        <Text>{formatTime(timer.seconds)}</Text>
        <Pressable
          style={{
            ...Styles.timerButton,
            ...Styles.timerStartButton,
          }}
          onPress={() => {
            writeTimerToAsync({
              ...timer,
              running: !timer.running,
            });
          }}
        >
          <Text>{timer.running ? "Stop" : "Start"}</Text>
        </Pressable>
      </View>
    );
  return <DeleteTimer id={props.id} delete={props.delete} />;
}
