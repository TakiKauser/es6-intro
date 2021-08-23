// class name starts with a capital letter usually
class Support{
    name;
    designation = "support web dev";
    address = "Bangladesh";
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, "start a support session");
    }
}

const taki = new Support("Taki", "Dhaka");
// console.log(taki);

const kauser = new Support("Kauser", "Cittagong");

// console.log(taki);
// console.log(kauser);

taki.startSession();
kauser.startSession();