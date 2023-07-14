// function FakeClass() {}
// FakeClass.prototype = SuperClass.prototype
// Subclass.prototype = new FakeClass()
// Subclass.prototype.constructor = Subclass

// Function.prototype.inherits = function(parent) {
//     const func = this

//     function FakeClass() {}
//     FakeClass.prototype = parent.prototype

//     func.prototype = new FakeClass()
//     func.prototype.constructor = func

// }

// function MovingObject () {} // grandparent

// function Ship () {} // parent1
// Ship.inherits(MovingObject);

// function Asteroid () {} // parent2
// Asteroid.inherits(MovingObject);

// MovingObject.prototype.falling = function() {
//     console.log("I fell during lunch")
// }

// let titantic = new Ship
// console.log(titantic.__proto__.__proto__)