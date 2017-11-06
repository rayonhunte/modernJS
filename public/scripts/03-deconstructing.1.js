"use strict";

(function () {

  // de construct 
  var person = {
    name: { first: "Nealson", last: "Hunte" },
    roles: ["admin"],
    isActive: true
  };

  // eg deep object 
  function printPerson(person) {
    var roles = person.roles,
        _person$name = person.name,
        first = _person$name.first,
        last = _person$name.last;

    console.log(first, last);
  }
  printPerson(person);

  // de construct in function call
  function printPerson3(parm, _ref) {
    var roles = _ref.roles,
        _ref$name = _ref.name,
        first = _ref$name.first,
        last = _ref$name.last;

    console.log(roles);
  }
  printPerson3(null, person);
  //default 
  function getTrack() {
    var _getTrack, _getTrack$description;

    return _getTrack = getTrack(), title = _getTrack.title, lengthInSeconds = _getTrack.lengthInSeconds, _getTrack$description = _getTrack.description, description = _getTrack$description === undefined ? "No desc found" : _getTrack$description, _getTrack;
  }

  // array
  var array = [1, 2, 3, 4, 5, 6, 7];
  var firstNum = array[0],
      secondNum = array[1],
      thirdNum = array[2];

  // de construct skip

  var x = array[0],
      y = array[1],
      z = array[3];

  //get first 2

  var h1 = array[0],
      h2 = array[1],
      rest = array.slice(2);

  // var swap

  var left = 10;
  var right = 20;


  // def parm 
  var _ref2 = [right, left];
  left = _ref2[0];
  right = _ref2[1];
  function withDefaults(person) {
    var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { verbose: true };

    console.log([person, output, options]);
  }
})();