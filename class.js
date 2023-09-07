const products=[
    {id:1,name:'lenovo',price:65000},
    {id:2,name:'dell',price:45000},
    {id:1,name:'hp',price:5000},
    {id:1,name:'mac',price:165000}
]

//  Every class has some properties, method
class Product{
    country='Bangladesh';
    constructor(name,origin,brand){
        this.name=name;
        this.origin=origin;
        this.Brand=brand;
    }
    //  speak(talk){
    //     console.log(`Taking About ${talk}`);
    //  }
}

const lenovo= new Product('Lenovo','bangladesh',"Apple")
//console.log(lenovo);
//lenovo.speak("Hello js")

class Teacher{
    constructor(name,subject){
        this.Name=name;
        this.Subject=subject;

    }
    lecture(){
        console.log("Sir tech math");
    }
}
const sir=new Teacher("Liakot","Math")
console.log(sir);
const rashid=new Teacher("Rashid","Chemistry")
console.log(rashid);