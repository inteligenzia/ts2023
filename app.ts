function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log("Result: " + num);
}

printResult(add(1, 2));

const f = (n: number): void => {
    console.log("Add: " + n);
}

type combineFunction = (a: number, b: number): number => number

let combineValues: combineFunction; 

combineValues = add; // will work; 
