const person1={name:"Amee",age:19};
const person2={name:"Arsh",age:20};

function introduction() {
    console.log(`Hello, I'm ${this.name},and I'm ${this.age} years old.`);

}
introduction.call(person2);