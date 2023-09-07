const numbers=[4,5,6,7,8,2,10]
const total=numbers.reduce((previous,current)=> previous+current,0)
console.log(total);

const sum=numbers.reduce((p,c)=>p+c,0)
console.log(sum);
