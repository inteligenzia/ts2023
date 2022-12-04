const person: {
    name: string;
    age: number;
    hobbies: string[],
    role: [number, string] //tuple
} = {
  name: "Vasya",
  age: 20,
  hobbies: ["sports", "warhammer"],
  role: [2, "author"],
};

for (const hobby of person.hobbies) {
  //Type inference will help IDE to understand what type of element in array will be and autosuggest correct properties and methods;
  console.log(hobby.toUpperCase());
}

console.log(person);
