const person = {
    name: "Vasya",
    age: 20,
    hobbies: ["sports", "warhammer"]
}

for (const hobby of person.hobbies) {
    //Type inference will help IDE to understand what type of element in array will be and autosuggest correct properties and methods;
    console.log(hobby.toUpperCase());
}

console.log(person);