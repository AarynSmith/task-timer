export const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, "0");
export const formatTime = (s: number): string => {
  const o = s;
  let rtn = "";
  if (s >= 3600) {
    rtn += `${Math.floor(s / 3600)}:`;
    s = s % 3600;
  }
  if (s >= 60 || rtn != "") {
    if (o >= 3600) {
      rtn += `${zeroPad(Math.floor(s / 60), 2)}:`;
    } else {
      rtn += `${Math.floor(s / 60)}:`;
    }
    s = s % 60;
  }
  if (o >= 60) {
    rtn += `${zeroPad(s, 2)}`;
  } else {
    rtn += `${s}s`;
  }
  return rtn;
};
