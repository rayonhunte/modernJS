"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var Person = function () {
    function Person(name) {
      _classCallCheck(this, Person);

      this._name = name;
    }

    _createClass(Person, [{
      key: "render",
      value: function render() {
        console.log("i am a person named " + this._name);
      }
    }, {
      key: "name",
      get: function get() {
        return this._name;
      },
      set: function set(name) {
        console.log("setting name to " + this._name);
        this._name = name;
      }
    }], [{
      key: "loadPeople",
      value: function loadPeople() {
        return [new Person("Person1"), new Person("Person2"), new Person("Person3")];
      }
    }]);

    return Person;
  }();

  var nelson = new Person("Nelson");
  nelson.render();
  nelson.name = 'Rayon';
  nelson.render();
  // static

  var _Person$loadPeople = Person.loadPeople(),
      _Person$loadPeople2 = _toArray(_Person$loadPeople),
      p1 = _Person$loadPeople2[0],
      p2 = _Person$loadPeople2[1],
      rest = _Person$loadPeople2.slice(2);

  p1.render();
  p2.render();

  // extends Person

  var Admin = function (_Person) {
    _inherits(Admin, _Person);

    // sub class constructor
    function Admin() {
      _classCallCheck(this, Admin);

      console.log("my own construct");
      return _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, "parent constructor"));
    }

    _createClass(Admin, [{
      key: "doAdminThing",
      value: function doAdminThing() {
        console.log("Doing admin things");
      }
    }, {
      key: "render",
      value: function render() {
        console.log("sub class render");
        _get(Admin.prototype.__proto__ || Object.getPrototypeOf(Admin.prototype), "render", this).call(this);
      }
    }]);

    return Admin;
  }(Person);

  var admin = new Admin("admin1");
  admin.doAdminThing();
  admin.render();
})();