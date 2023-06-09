const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("enter num1: "));
let num2 = parseInt(prompt("enter num2: "));


const hcf = (num1, num2) => {
  while (num1 !== 0) {
    let temp = num1;
    num1 = num2 % num1;
    num2 = temp;
  }
  return num2;
};
let HCF=hcf(num1,num2);
console.log("HCF is : " +HCF);
const lcm=( num1,num2)=>num1*num2/HCF;
console.log( " LCM IS : "+lcm(num1,num2,HCF));

function heylcm(num1, num2) {
       let max = Math.max(num1, num2);
       let lcm = max;
       
       while (true) {
         if (lcm % num1 === 0 && lcm % num2 === 0) 
           break;
         
         lcm += max;
       }
       
       return lcm;
     }
    console.log( heylcm(num1,num2));