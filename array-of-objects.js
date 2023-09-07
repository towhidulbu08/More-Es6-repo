const products=[
    {id:1,name:'lenovo',price:65000},
    {id:2,name:'dell',price:45000},
    {id:1,name:'hp',price:5000},
    {id:1,name:'mac',price:165000}
]

// map 
const names=products.map(e=> e.name)
console.log(names);
// forEach
const id=products.forEach(p=>{
    console.log(p.id);
})

// filter
products.filter(e=> e.price>50000)
console.log(products.filter(e=> e.price>50000));

// find


const affordable=products.find(p=> p.price<50000)
console.log(affordable);


// reduce

const total=products.reduce((a,c)=> a+c.price,0)

console.log(total);
