"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {

  // object return 
  function getPoint() {
    var x = 0;
    var y = 0;

    return { x: x, y: y };
  }

  var firstName = "Rayon";
  var person = {
    firstName: firstName,
    lastName: 'Hunte',
    sayHello: function sayHello() {
      console.log(this.firstName + " " + this.lastName);
    },

    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  var thing = _defineProperty({
    prop1: "WHOA"
  }, "thing-" + "other-" + Math.random(), "blegh");
})();