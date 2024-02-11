const ages = [19,22,19,24,20,25,26,24,25,24]
ages.sort((a,b) => a-b);
const minAge = ages[0];
const maxAge = ages[ages.length-1];
console.log(ages);
console.log(minAge);
console.log(maxAge);



let medianAge;
if (ages.length%2==0) {
    const mid1 = ages[Math.floor(ages.length/2)-1];
    const mid2 = ages[Math.floor(ages.length/2)];  
    medianAge = (mid1+mid2)/2;

}
else{
    medianAge = ages[Math.floor(ages.length/2)];
}
console.log(medianAge);



const SumAges=ages.reduce((sum,age)=>sum+age,0);
const averageAge = SumAges/ages.length;
console.log(averageAge);


const ageRange = maxAge - minAge;
console.log(ageRange);


const minDifferece = Math.abs(minAge-averageAge);
const maxDifference = Math.abs(maxAge-averageAge);
console.log(minDifferece);
console.log(maxDifference);

