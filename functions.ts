function add1(n1: number, n2: number) {
    return n1 + n2;
}

function printResult1(num: number) {
    console.log("Result: " + num);
}

printResult1(add1(1, 2));

const f = (n: number): void => {
    console.log("Add: " + n);
}

type combineFunction = (a: number, b: number) => number

let combineValues: combineFunction; 

combineValues = add1; // will work; 

function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    console.log(cb);
    return cb({data: data});
  }

  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });
