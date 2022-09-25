import { StyleSheet, ViewStyle } from "react-native";
const timerWidth = 176;
const timerHeight = 76;
const timerMargin = 5;
const timerRowWidth = 3;

const colors = {
  timerBg: "#dcdcdc",
  deleteBtn: "#c40707",
  startBtn: "#27d465",
  stopBtn: "#bf7e0f",
};

const flexRow: ViewStyle = {
  flex: 1,
  flexDirection: "row",
};

const debugInd: ViewStyle = {
  borderWidth: 1,
  borderColor: "red",
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
    width: "100%",
    minWidth: (timerWidth + timerMargin) * timerRowWidth + 1,
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

    maxWidth: timerWidth,
    minWidth: timerWidth,
    minHeight: timerHeight,
    maxHeight: timerHeight,

    borderWidth: 1,
    borderRadius: 5,

    backgroundColor: colors.timerBg,

    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    margin: timerMargin,
  },
  timerTopRow: {
    ...flexRow,

    width: "100%",
    // borderWidth: 1,
    overflow: "hidden",
    maxHeight: 25,
    minHeight: 25,
  },
  timerNameRow: {
    ...flexRow,

    alignItems: "center",
    justifyContent: "center",

    width: "50%",
    textAlign: "center",
    textAlignVertical: "center",
  },
  timerNameInput: {
    ...flexRow,
  },
  timerNameTextInput: {
    height: 20,
    width: "100%",
  },
  timerButton: {
    flex: 1,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderTopRightRadius: 5,
  },
  timerStartButton: {
    backgroundColor: colors.startBtn,
  },
  timerStopButton: {
    backgroundColor: colors.stopBtn,
  },
  timerDeleteButton: {
    backgroundColor: colors.deleteBtn,
  },
  timerDeleteButtonText: {
    color: "white",
    fontWeight: "700",
  },
  timerTimeTextView: {
    ...flexRow,
    alignItems: "center",
    justifyContent: "center",
  },
  timerTimeText: {
    fontSize: 48,
  },
});
