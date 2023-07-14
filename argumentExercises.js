// function sum (a, b, c, d, e) {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }



// function sum(...args){
//     let sum = 0 
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return sum
// }

// console.log(sum(1, 2, 3, 4)); //=== 10);
// console.log(sum(1, 2, 3, 4, 5)); // === 15);

// Function.prototype.myBind = function(ctx, ...bindArgs) {
//     const func = this;
//     return function(...callArgs) {
//         return func.call(ctx, bindArgs, callArgs);
//     }
// }

// Function.prototype.myBind = function(ctx, args) {
//     const bindArgs = arguments
//     const func = this;
//     let arr = []
//     return function(args2) {
//             const callArgs = arguments
//             for (let i = 1; i < bindArgs.length; i++) {
//                 arr.push(bindArgs[i]);
//             }
//             for (let i = 0; i < callArgs.length; i++) {
//                 arr.push(callArgs[i]);
//             }
//              return func.apply(ctx, arr);
//     }
// }

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true

// no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


// function curriedSum(num) {
//  let nums = [];

//     return function _curriedSum(arg) {
//         nums.push(arg);
//         if (nums.length === num) {
//             return nums.reduce((a, b) => a + b);
//         } else {
//            return _curriedSum
//         }
//     }
// }

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    let nums = [] 
    const func = this
    return function _getMoreData(arg) {
        nums.push(arg)
        if (nums.length === numArgs) {
            // return func(...nums)
            return func.apply(func, nums)
        } else {
            return _getMoreData
        }
    }
}

const curried = addThreeNums.curry(3) 

function addThreeNums(num1, num2, num3) {
    return num1 + num2 + num3
}