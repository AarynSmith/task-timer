import { StyleSheet, ViewStyle } from "react-native";

const flexRow: ViewStyle = {
  flex: 1,
  flexDirection: "row",
};

export const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  timersContainer: {
    ...flexRow,
    flexWrap: "wrap",
    alignContent: "flex-start",
    borderWidth: 1,
    minWidth: (181 + 5) * 3 + 1,
  },
  buttonRow: {
    ...flexRow,
    justifySelf: "flex-end",
    justifyContent: "space-around",
    maxHeight: 45,
    width: 300,
    padding: 5,
  },
  timerCard: {
    borderWidth: 1,
    maxWidth: 176,
    minWidth: 176,
    minHeight: 76,
    maxHeight: 76,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    margin: 5,
  },
  timerNameRow: {
    ...flexRow,
  },
  timerNameInput: {
    ...flexRow,
  },
  timerNameTextInput: {
    height: 20,
  },
  timerButton: {
    flex: 1,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 35,
    maxHeight: 35,
  },
  timerButtonText: {
    color: "white",
    fontWeight: "500",
  },
  timerStartButton: {
    backgroundColor: "#66bb6a",
  },
  timerDeleteButton: {
    backgroundColor: "#B00020",
  },
});
