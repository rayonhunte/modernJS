var  _ = require("lodash");

//console.log(_);

var users = [
  {id: 1, name:"Nelson", roles: ["admin"]},
  {id: 2, name:"Foo", roles: ["registered","moderator"]},
  {id: 3, name:"Bar", roles: []},
  {id: 4, name:"Baz", roles: ["registered"]},
  {id: 5, name:"Blegh", roles: ["admin","moderator"]},
]

//find all admin

// updated to includes no longer contains and map, pick removed

var admins = _(users).filter(u => _.includes(u.roles, "admin")).map('name').value();

console.log(admins);

userRoleList = _(users)
.map(u => `${u.name}: ${u.roles.join(", ")}`)
.value();

console.log(userRoleList);

var user = _.find(users, {id: 4})

console.log(user); 


var array = require("lodash/array");
console.log(array.first(users));


// collection/each replaced with forEach
var each = require("lodash/forEach");
each(users, user => console.log(user.name));