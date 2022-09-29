import { zeroPad, formatTime } from "./Utilities";

describe("Zero Pad", () => {
  test("1 to 2", () => {
    expect(zeroPad(1, 2)).toBe("01");
  });

  test("10 to 2", () => {
    expect(zeroPad(10, 2)).toBe("10");
  });

  test("100 to 2", () => {
    expect(zeroPad(100, 2)).toBe("100");
  });

  test("1 to 3", () => {
    expect(zeroPad(1, 3)).toBe("001");
  });

  test("10 to 3", () => {
    expect(zeroPad(10, 3)).toBe("010");
  });

  test("100 to 3", () => {
    expect(zeroPad(100, 3)).toBe("100");
  });

  test("1000 to 3", () => {
    expect(zeroPad(1000, 3)).toBe("1000");
  });
});

describe("Format Time", () => {
  test("0 => 0s", () => {
    expect(formatTime(0)).toBe("0s");
  });
  test("5 => 5s", () => {
    expect(formatTime(5)).toBe("5s");
  });
  test("30 => 30s", () => {
    expect(formatTime(30)).toBe("30s");
  });
  test("59 => 59s", () => {
    expect(formatTime(59)).toBe("59s");
  });
  test("60 => 1:00", () => {
    expect(formatTime(60)).toBe("1:00");
  });
  test("65 => 1:05", () => {
    expect(formatTime(65)).toBe("1:05");
  });
  test("600 => 10:00", () => {
    expect(formatTime(600)).toBe("10:00");
  });
  test("605 => 10:05", () => {
    expect(formatTime(605)).toBe("10:05");
  });
  test("610 => 10:10", () => {
    expect(formatTime(610)).toBe("10:10");
  });
  test("3600 => 1:00:00", () => {
    expect(formatTime(3600)).toBe("1:00:00");
  });
  test("3605 => 1:00:05", () => {
    expect(formatTime(3605)).toBe("1:00:05");
  });
  test("3610 => 1:00:10", () => {
    expect(formatTime(3610)).toBe("1:00:10");
  });
  test("4200 => 1:10:00", () => {
    expect(formatTime(4200)).toBe("1:10:00");
  });
});
