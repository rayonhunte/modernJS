function loopOver10(action){
  for (var i=0; i<10;i++){
    action(i)
  }
}

loopOver10(function(number){
  console.log(number);
})

//versions

loopOver10(number => console.log(number));

loopOver10(number => {
  console.log(number);
  console.log(number * 10);
})

var noParamFunc = () => console.log("HI");

noParamFunc();

// included return function
var multiParmFunc = (left, right) => left + right;
// if curly must add return

console.log(multiParmFunc(10,20));


var obj = {
  name: "Nelson",

  showName(){
    console.log("My name is " + this.name);
    setTimeout(()=>{
      console.log("My name is now ", this.name);
    },1000);
  }
}

obj.showName();