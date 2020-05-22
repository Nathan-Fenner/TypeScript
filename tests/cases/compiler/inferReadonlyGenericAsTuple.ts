function compute<TS extends readonly unknown[]>(
  sources: TS,
  func: (...args: TS) => number,
): number {
  return func(...sources);
}

compute(["abc", 123], (str, num) => {
  return str.length + num;
});
