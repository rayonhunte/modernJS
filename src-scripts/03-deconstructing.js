( () =>{

  // de construct 
  const person = {
    name: {first: "Nealson", last: "Hunte"},
    roles: ["admin"],
    isActive: true
  };

  // eg deep object 
  function printPerson(person){
    const {roles, name:{first, last}} = person;
    console.log(first, last);
  }
  printPerson(person);

  // de construct in function call
  function printPerson3(parm, {roles, name:{first, last}}){
    console.log(roles);
  }
   printPerson3(null, person)
  //default 
  function getTrack(){
    return {title, lengthInSeconds, description = "No desc found"} = getTrack();
  }

  // array
   const array = [1,2,3,4,5,6,7]
   const [firstNum, secondNum, thirdNum] = array;

   // de construct skip
   const [x, y, ,z] = array;

   //get first 2
   const [ h1, h2, ... rest] = array;

   // var swap
   let left = 10;
   let right = 20;
   [left, right] = [right, left]

   // def parm 
   function withDefaults(person, output="name", options={verbose: true}){
     console.log([person, output, options])
   }

}
)();