( () => {

/* let scope example */

for(let i =0; i < 10; i++){
  window.setTimeout(() =>{
    console.log(i);
  },100)
}

// const example

const obj = {name: "whoa"};

//example mut 
obj.name = "blegh";

})();