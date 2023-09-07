//1.var vs let vs const
/*
 
i.let and const block scoped
ii.let and const can't be redeclare
iii.let can be reassign but const can't
 
*/




//2.default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
//3.Template literals
numbers=[12,23,23,332]
const elementHtml = `
<div>
    <h3>Name:</h3>
    <p> Address:</p>
    <p> Salary:${calculateSalary(1000, 0, 0)}</p>
    <p> Others:${numbers[2]}</p>
</div>
`
//4.Arrow function
const doubleIt= x => x*2;
const calculateSalary2= (salary,tax,bonus) => salary-salary*tax+bonus
//5.Spread Operator.
const ages=[11,13,15,14,10,16];
const newAges=[...ages,22,24,23]

//Destructuring

const {x,y,...z} ={x:45,y:12,z:33,name:"sakib al hasan",salary:4999394}
//console.log(x,y,z)
const [a,b,c,...rest]=[32,43,83,23,90,45,64]
//console.log(a,b,c,rest)

