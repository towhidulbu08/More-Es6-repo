//syntactic sugar
class TeamMembers {
    name;
    location;
    constructor(name,location){
        this.name=name;
        this.location=location
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }


}
class Instructor extends TeamMembers {
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        super (name,location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
   
}
//syntactic sugar
class Developer extends TeamMembers {
    name;
    designation = 'web course Instructor'
    team = 'web team'
    tech;
    location;

    location;
    constructor(name, location, tech) {
        super(name,location);
        this.name=name;
        this.location=location
        this.tech = tech;
    }
    developerFeature(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the version  ${version}`)
    }
    
}


class JobPlacement  extends TeamMembers{
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
   

   
    constructor(name, location, region) {
       super(name,region)
       this.location=location
        this.region = region;
    }
    provideResume(feature) {
        console.log(`Please develop the ${feature}`)
    }
    prepareStudent(version) {
        console.log(`please release the version  ${version}`)
    }
    
}
const alia=new Developer('alia','dhaka','react')
console.log(alia)
alia.provideFeedback()
const bipasa=new JobPlacement("bipasa",'kolkata','India')
console.log(bipasa)


