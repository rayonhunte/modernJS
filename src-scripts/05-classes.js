(
  () =>
  {
     class Person  {
       constructor(name){
         this._name = name;
       }
       get name() {return this._name};
       set name(name) {
         console.log(`setting name to ${this._name}`);
         this._name = name;
       }
       static loadPeople(){
         return [
           new Person("Person1"),
           new Person("Person2"),
           new Person("Person3")
         ]
       }
       render(){
         console.log(`i am a person named ${this._name}`);
       }
     }

     const nelson = new Person("Nelson");
     nelson.render();
     nelson.name = 'Rayon';
     nelson.render();
     // static
     const [p1, p2, ... rest] = Person.loadPeople();
     p1.render();
     p2.render();

     // extends Person
    class Admin extends Person {
      // sub class constructor
      constructor(){
        console.log("my own construct");
        super("parent constructor");
      }
      doAdminThing(){
        console.log("Doing admin things");
      }
      render(){
       console.log("sub class render")
       super.render();
      }
    }

    const admin = new Admin("admin1")
    admin.doAdminThing();
    admin.render();
  }
)();