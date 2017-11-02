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

