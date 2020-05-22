function computeArrAny<TS extends readonly unknown[]>(
  sources: TS,
  func: (...args: TS) => number,
): number {
  return func(...sources);
}

computeArrAny(["abc", 123], (str, num) => {
  return str.length + num;
});

function computeArrStr<TS extends readonly string[]>(
  sources: TS,
  func: (...args: TS) => number,
): number {
  return func(...sources);
}

computeArrStr(["abc", "def"], (str1, str2) => {
  return str1.length + str2.length;
});


function computeArrTup<TS extends readonly [string, number]>(
  sources: TS,
  func: (...args: TS) => number,
): number {
  return func(...sources);
}

computeArrTup(["abc", 123], (str, num) => {
  return str.length + num;
});
