function passTest() {
  var value = 5
  return function() {
    var returnValue = value
    value = returnValue + 100
    return returnValue
  }
}

var passObjectAndArray = passTest()
var a = Object.prototype[Symbol.toPrimitive] = passObjectAndArray

function test( x ) {
  return x < 100 && x > 100 ? 'pass' : 'fail'
}

test( a )
// test( {r: "hello"} )
// test( [3,4,5] )