"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var _person;

  //using symbols to make private
  var mySymbol = Symbol("mySymbol");

  var person = (_person = {}, _defineProperty(_person, mySymbol, "blegh"), _defineProperty(_person, "render", function render() {
    console.log(this[mySymbol]);
  }), _person);

  person.render();
  //console.log(person.mySymbol);


  // 

  var myStatus = Symbol("some-plugin");

  $[myState] = "custom name";

  //set up private

  var _firstName = Symbol("fName"),
      _lastName = Symbol("lName");

  var Person = function () {
    _createClass(Person, [{
      key: "firstName",
      get: function get() {
        return this[_firstName];
      }
    }, {
      key: "lastName",
      get: function get() {
        return this[_lastName];
      }
    }]);

    function Person(firstName, lastName) {
      _classCallCheck(this, Person);

      this[_firstName] = firstName;
      this[_lastName] = lastName;
    }

    return Person;
  }();
})();