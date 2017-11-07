(()=>{

  //using symbols to make private
  const mySymbol = Symbol("mySymbol");

  const person = {
    [mySymbol]: "blegh",

    render(){
      console.log(this[mySymbol]);
    }
  };

  person.render();
  //console.log(person.mySymbol);



  // 

  const myStatus = Symbol("some-plugin");

  $[myState] = "custom name"


  //set up private

  const _firstName = Symbol("fName"), _lastName = Symbol("lName");

  class Person {
    get firstName() {return this[_firstName];}
    get lastName() {return this[_lastName];}

    constructor(firstName,lastName){
      this[_firstName] = firstName;
      this[_lastName] = lastName;
    }
  }

})();