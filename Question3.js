const contactMap = new Map();
contactMap.set("Amee",{age:19,email:"ameep04@gmail.com",location:"Vadodra"});
contactMap.set("Aanshi",{age:19,email:"aanship04@gmail.com",location:"Jaipura"});
contactMap.set("Aesha",{age:19,email:"aeshap04@gmail.com",location:"Ahendabad"});
function getcontact(name){
    return contactMap.get(name)
}
console.log(getcontact("Amee"))