class Pass {
  constructor(numb) {
    console.log(`numb in constructor`, numb)
    this.numb = numb
  }

  [Symbol.toPrimitive]( hint ) {
    switch( hint ) {
      case 'number':

        console.log(`this.numb in symbol.toprimirive`, this.numb)

        while ( this.numb < 1 ) {
          this.numb = this.numb + 99 
        }

        console.log(`AFTER WHILE this.numb in symbol.toprimirive`, this.numb)
        
        if ( 0 < this.numb < 100 ) {
          let returnValue = this.numb
          this.numb = this.numb + 100
          return returnValue
        }

        console.log( ` 100 < this.numb < 200 - `, this.numb )

        if ( 100 < this.numb < 200 ) {
          let returnValue = this.numb - 100
          return this.numb - 100
        }
        
    }
  }
}

var a = 6

var c = new Pass( a )


function test( x ) {
  return x < 100 && x > 100 ? 'pass' : 'fail'
}

test( c )