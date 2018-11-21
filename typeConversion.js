// function passTest() {
//   var value = 5
//   return function() {
//     var returnValue = value
//     value = returnValue + 100
//     return returnValue
//   }
// }

// var passForObject = passTest()
 
// var obj = {
//   [Symbol.toPrimitive](hint) {
//     console.log(hint)
//     if( hint === 'number' ) return passForObject()
//   } 
// }

// function test( x ) {
//   console.log(x)
//   return x < 100 && x > 100 ? 'pass' : 'fail'
// }

// var valueOfFunction = () => {
//   var value = 10;
//   return function() {
//     var returnValue = value
//     value = value + 100
//     return returnValue
//   }
// }

var a = function() {};

var valueOfFunctionTest2 = () => {
  var value = 10;
  return function() {
    var returnValue = value
    value = value - 6
    return returnValue
  }
}  

a.valueOf = valueOfFunctionTest2()

const test2 = x => 5 < x && 5 > x  ? 'pass' : 'fail'

test2(a)