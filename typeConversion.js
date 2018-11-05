// class Pass {
//   constructor(numb) {
//     this.numb = numb
//   }

//   [Symbol.toPrimitive]( hint ) {
//     switch( hint ) {
//       case 'number':

//         while ( this.numb < 1 ) {
//           this.numb = this.numb + 99 
//         }

//         if ( 0 < this.numb < 100 ) {
//           let returnValue = this.numb
//           this.numb = this.numb + 100
//           return returnValue
//         }
//     }
//   }
// }

// var a = 6

// var c = r => new Pass( r )

function passTest() {
  var value = 6
  return function() {
    var returnValue = value
    value = returnValue + 100
    return returnValue
  }
}
var passObjectAndArray = passTest() 

function test( x ) {
  return x < 100 && x > 100 ? 'pass' : 'fail'
}
// test( c( a ) )
 
Object.prototype.valueOf = Array.prototype.valueOf = passObjectAndArray
Number.prototype.valueOf = pass 

test( {} )