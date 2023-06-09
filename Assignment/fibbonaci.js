var prompt = require('prompt-sync')();
let size=prompt('enetr the size of series');
let fibbonaaciSeries=[];
fibbonaaciSeries.push(0);
fibbonaaciSeries.push(1);
let temp;
let a=0;
let b=1;
for (let index = 2; index <= size; index++){
       let num=a+b;
       fibbonaaciSeries.push(num);
       a=b;
       b=num;
}
console.log(...fibbonaaciSeries)