//// [inferReadonlyGenericAsTuple.ts]
function compute<TS extends readonly unknown[]>(
  sources: TS,
  func: (...args: TS) => number,
): number {
  return func(...sources);
}

compute(["abc", 123], (str, num) => {
  return str.length + num;
});


//// [inferReadonlyGenericAsTuple.js]
function compute(sources, func) {
    return func.apply(void 0, sources);
}
compute(["abc", 123], function (str, num) {
    return str.length + num;
});
