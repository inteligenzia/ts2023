function add(a: number, b: number, showResult: boolean, phrase: string) {
  const result = a + b;
  if (showResult) return console.log(phrase + result);
  else return result;
}

const a = 50;
const b = 4.5;
const printResult = true;
const phrase = "Result is: ";

add(a, b, printResult, phrase);
