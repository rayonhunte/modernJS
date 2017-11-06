(() => {

  // object return 
  function getPoint(){
    let x = 0;
    let y = 0;

    return {x, y}
  }

  const firstName = "Rayon";
  const person = {
    firstName,
    lastName: 'Hunte',
    sayHello(){
      console.log(`${this.firstName} ${this.lastName}`)
   },
   get fullName(){
     return `${this.firstName} ${this.lastName}`;
   }
  }
  const thing = {
    prop1: "WHOA",
    ["thing-" + "other-" + Math.random()]: "blegh"
  }

})();