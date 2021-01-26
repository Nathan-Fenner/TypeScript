// @strict: true

let f!:
  | (<UStr>(
    callbackfnStr: (valueStr: string, indexStr: number, arrayStr: string[]) => UStr,
  ) => UStr[])
  | (<UNev>(
    callbackfnNev: (valueNev: never, indexNev: number, arrayNev: never[]) => UNev,
  ) => UNev[]);

f(item => item.length);

function orDefault<T, D>(x: T | null, d: D): T | D {
  return x !== null ? x : d;
}

const xs: string[] | null = ["a", "bc", "def"];

const y = orDefault(xs, []).map(word => word.length);

// Now, check optional arguments for correctness:



const f1: ((ask: (x: string, y?: number) => void) => void) | ((ask: (x: number, y?: never) => void) => void) = null as any;
f1((a, b) => {
  // The 'remove uncallable candidates' rule DOES NOT APPLY:
  a; // should be 'any' (in future, could be string|number)
  b; // should be 'any' (in future, could be number|undefined)
})

const f2: ((ask: (x: string, y?: number) => void) => void) | ((ask: (x: number, y: never) => void) => void) = null as any;
f2((a, b) => {
  // The 'remove uncallable candidates' rule applies:
  a; // should be string
  b; // should be number|undefined
})


const f3: ((ask: (x: string, ...y: number[]) => void) => void) | ((ask: (x: number, ...y: never[]) => void) => void) = null as any;
f3((a, b) => {
  // The 'remove uncallable candidates' rule DOES NOT APPLY:
  a; // should be 'any' (in future, could be string|number)
  b; // should be 'any' (in future, could be number|undefined)
})

