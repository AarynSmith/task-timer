import { Pressable, Text, GestureResponderEvent } from "react-native";

import { Styles } from "../AppStyles";

export default function DeleteButton(props: {
  delete: (event: GestureResponderEvent) => void;
}) {
  return (
    <Pressable
      style={{
        ...Styles.timerButton,
        ...Styles.timerDeleteButton,
      }}
      onPress={props.delete}
    >
      <Text style={Styles.timerDeleteButtonText}>Delete</Text>
    </Pressable>
  );
}
