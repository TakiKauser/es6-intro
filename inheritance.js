class TeamMember {
    name;
    designation = "support web dev";
    address = "Bangladesh";

    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}



class Support extends TeamMember {
    /* 
   name;
   designation = "support web dev";
   address = "Bangladesh";
 
   constructor(name, address) {
       this.name = name;
       this.address = address;
   }
   */
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, "start a support session");
    }
}

class StudentCare extends TeamMember {
    /* 
    name;
    designation = "Student Care Web Dev";
    address = "Bangladesh"
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
     */
    buildARoutine(student) {
        console.log(this.name, "build a routine for", student);
    }
}
class NeptuneDev extends TeamMember {
    /* 
    name;
    designation = "Student Care Web Dev";
    address = "Bangladesh"
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    */
    releaseApp(student) {
        console.log(this.name, "release app version", version);
    }
}

const taki = new Support("Taki", "Dhaka", 11);

// const kauser = new StudentCare("Kauser", "Cittagong");

console.log(taki);
// console.log(kauser);