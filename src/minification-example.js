class MinifyMe {
  constructor(miniMe) {
    this.name = miniMe;
  }
  
  greet() {
    alert(`Hello, I am ${this.name}!!`);
  }
}

let mm = new Minify("minfied");
mm.greet();

class Irgendwas {
  constructor(test){
    this.test = test
  }

  execute() {
   console.log("Hello World")
  }
}

mm.greet();
// das hier ist eine Änderung, die erst nach dem Pull in meinem lokalen Verzeichnis auf dem Rechner landen sollte
