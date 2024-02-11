function displayInfo(name,role){
    console.log(`Name: ${name}, Role: ${role}`);
}
displayInfo.call(null, "Amee","Developer");
displayInfo.apply(null,["Arsh","SDE"]);
function job() {
    console.log(`Hello, ${this.name}!`);
}
const user = { name:"jemi"};
const boundJob=job.bind(user);
boundJob();