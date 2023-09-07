class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
}
const ali=new Person("kodom ali",21)
const dam=new Person("dom ali",21)
console.log(ali);
ali.sleep()
dam.sleep()