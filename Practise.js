// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
//console.log(data.Sophia.study[1].secondary[1].location);

// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
console.log(students['2222'].address["city"],students['3333'].name);


// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);



// P-01.
const numbers = [1, 3, 5, 7, 9]
const evenArr = []
for (let num of numbers) {
    num++;
    const Even = evenArr.push(num)
}
//console.log(evenArr);
const getEvenArr = numbers.map(x => x + 1)

//console.log(getEvenArr);
// P-02.
const Digit = [33, 50, 79, 78, 90, 101, 30]
const getDivisibleBy10 = Digit.filter(x => x % 10 == 0)
const getDivisibleByTen = Digit.find(x => x % 10 == 0)
//console.log(getDivisibleBy10,getDivisibleByTen);

// P-03.
const instructor = [
   
    { name: "Nodi", age: 23, position: "Senior"},
    {name:"Akil",age:26,position:"Junior"},
    {name:"Sobuj",age:30,position:"Senior"},

]
const getSenior=instructor.filter(element => {
      if(element.position==='Senior'){
        const {name}=element
      // console.log(name);
      }
})

// P-04
const people=[
    {name:"Meena",age:20},
    {name:'Rina',age:15},
    {name:'Suchorita',age:22}
]

const sum=people.reduce(((a,c)=>a+c.age),0)
//console.log(sum);

// with for loop
let total=0;
 for(let p of people){
    total+=p.age
 }
 //console.log(total);
