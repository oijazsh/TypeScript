//// [es6ClassTest.ts]
class Bar {
    public goo: number;
    public prop1(x) {
        return x;
    }

    constructor (n) { }
}

// new-style class
class Foo  extends Bar {
	foo:number;
	gar = 0;
	zoo:string = "zoo";
	x: any;

	bar() { return 0; }

	private boo();
	private boo(x?) { return x; }

    static statVal = 0;

	constructor();
	constructor(x?, private y?:string, public z?=0) {
        super(x);
		this.x = x;
        this.gar = 5;
	 }
}

var f = new Foo();

declare module AmbientMod {
	export class Provide {
		foo:number;
		zoo:string;

		constructor();
		
		private boo();
		bar();
	}
}


//class GetSetMonster {


//  // attack(target) {
//  //     WScript.Echo("Attacks " + target);
//  // }
//  // The contextual keyword "get" followed by an identifier and
//  // a curly body defines a getter in the same way that "get"
//  // defines one in an object literal.
//  // get isAlive() {
//  //   return this.health > 0;
//  // }
 
//  // Likewise, "set" can be used to define setters.
//  set health(value:number) {
//    if (value < 0) {
//      throw new Error('Health must be non-negative.')
//    }
//    this.health = value
//  }
//  get health() { return 0; }

//  constructor(this.name: string, health: number) {
//    this.health = 0;
//  }
//}


//class bar {

//   static fnOverload( );

//   static fnOverload(foo: string){ } // no error

//   constructor(){};    

//}


//// [es6ClassTest.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bar = (function () {
    function Bar(n) {
    }
    Bar.prototype.prop1 = function (x) {
        return x;
    };
    return Bar;
}());
// new-style class
var Foo = (function (_super) {
    __extends(Foo, _super);
    function Foo(x, y, z) {
        if (z === void 0) { z = 0; }
        _super.call(this, x);
        this.y = y;
        this.z = z;
        this.gar = 0;
        this.zoo = "zoo";
        this.x = x;
        this.gar = 5;
    }
    Foo.prototype.bar = function () { return 0; };
    Foo.prototype.boo = function (x) { return x; };
    Foo.statVal = 0;
    return Foo;
}(Bar));
var f = new Foo();
//class GetSetMonster {
//  // attack(target) {
//  //     WScript.Echo("Attacks " + target);
//  // }
//  // The contextual keyword "get" followed by an identifier and
//  // a curly body defines a getter in the same way that "get"
//  // defines one in an object literal.
//  // get isAlive() {
//  //   return this.health > 0;
//  // }
//  // Likewise, "set" can be used to define setters.
//  set health(value:number) {
//    if (value < 0) {
//      throw new Error('Health must be non-negative.')
//    }
//    this.health = value
//  }
//  get health() { return 0; }
//  constructor(this.name: string, health: number) {
//    this.health = 0;
//  }
//}
//class bar {
//   static fnOverload( );
//   static fnOverload(foo: string){ } // no error
//   constructor(){};    
//}
