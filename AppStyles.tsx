import { StyleSheet, ViewStyle } from "react-native";
const timerWidth = 176;
const timerHeight = 76;
const timerMargin = 5;
const timerRowWidth = 3;

const colors1 = {
  textColor: "#000",
  windowBg: "#fff",
  timerBg: "#dcdcdc",
  startBtn: "#27d465",
  startTxt: "#000",
  stopBtn: "#bf7e0f",
  stopTxt: "#000",
  deleteBtn: "#c40707",
  deleteTxt: "#fff",
};

const theme2 = {
  "Dark Jungle Green": "#002626",
  "Warm Black": "#0e4749",
  "Yellow Green": "#95c623",
  Persimmon: "#e55812",
  Alabaster: "#efe7da",
};
const colors2 = {
  textColor: theme2["Dark Jungle Green"],
  windowBg: theme2.Alabaster,
  timerBg: theme2.Alabaster,
  startBtn: theme2["Warm Black"],
  startTxt: theme2.Alabaster,
  stopBtn: theme2["Yellow Green"],
  stopTxt: theme2["Dark Jungle Green"],
  deleteBtn: theme2.Persimmon,
  deleteTxt: theme2.Alabaster,
};
const theme = colors2;

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
    backgroundColor: theme.windowBg,
    color: theme.textColor,
    alignItems: "center",
    justifyContent: "center",
  },
  timersContainer: {
    ...flexRow,
    color: "inherit",
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
    color: "inherit",

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

    backgroundColor: theme.timerBg,

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
    color: "inherit",

    width: "100%",
    overflow: "hidden",
    maxHeight: 25,
    minHeight: 25,
  },
  timerNameTouchable: {
    ...flexRow,
    color: "inherit",

    alignItems: "center",
    justifyContent: "center",

    width: "50%",
    textAlign: "center",
    textAlignVertical: "center",
  },
  timerNameText: {
    color: "inherit",
  },
  timerNameInput: {
    ...flexRow,
    color: "inherit",
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
    backgroundColor: theme.startBtn,
    color: theme.startTxt,
  },
  timerStartStopButtonText: {
    color: "inherit",
  },
  timerStopButton: {
    backgroundColor: theme.stopBtn,
    color: theme.stopTxt,
  },
  timerDeleteButton: {
    backgroundColor: theme.deleteBtn,
    color: theme.deleteTxt,
  },
  timerDeleteButtonText: {
    color: "inherit",
    fontWeight: "700",
  },
  timerTimeTextView: {
    ...flexRow,
    alignItems: "center",
    justifyContent: "center",
  },
  timerTimeText: {
    color: "inherit",
    fontSize: 48,
  },
  appAddButton: {},
  appAddButtonText: {
    color: "inherit",
  },
  appDeleteButton: {},
  appDeleteButtonText: {
    color: "inherit",
  },
});
