"use strict";

(function () {
  var _loop = function _loop(i) {
    window.setTimeout(function () {
      console.log(i);
    }, 100);
  };

  /* let scope example */

  for (var i = 0; i < 10; i++) {
    _loop(i);
  }

  // const example

  var obj = { name: "whoa" };

  //example mut 
  obj.name = "blegh";
})();