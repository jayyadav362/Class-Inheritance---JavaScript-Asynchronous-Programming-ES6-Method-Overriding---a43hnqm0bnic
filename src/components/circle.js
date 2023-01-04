// import using require

// declare class
import Shape from './shape';

// declare class
module.exports = class Circle extends Shape{
     constructor(){
      super();
     }
  calculateArea(){
    console.log("calculated area from Circle class");
  }
}

// export class using module.exports