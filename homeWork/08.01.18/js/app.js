//ex 1 
// two way : 
// 1.1 : old style no class, inheritance between two constructors ;
function Shape(posX, posY, color) {
    this.x = posX;
    this.y = posY;
    this.color = color;
    this.distance = function () {
        return `
            DISTANCE : ${Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))}
        `;
    }
    this.toString = function () {
        return `
            X = ${this.x * this.x} 
            Y = ${this.y * this.y}
            COLOR = ${this.color}
            ${this.distance()}
        `;
    }
}

function Circle(posX , posY , color , radius){
    Shape.call(this, posX , posY , color);
    this.radius = radius;
    this.toString = function(){
         return `
            X = ${this.x * this.x} 
            Y = ${this.y * this.y}
            COLOR = ${this.color}
            ${this.radius}
        `;
    }
    this.getArea = function(){
        return Circle.pai * (this.radius * this.radius);
    }

    this.getPerimeter = function(){
        return Circle.pai *this.radius * 2;
    }
    
}

Circle.prototype = Object.create(Shape.prototype); // why do i have to use this 
Circle.prototype.constructor = Circle; // still dont get why are this two rows are a must 

Circle.pai = 3.14;
let one = new Shape(2,3,'green');
let two = new Circle(2,4,'blue',5);

// console.log(two.toString());
// console.log(two.distance());
// console.log(two.getPerimeter());
// console.log(two.getArea());
// console.log(Circle.pai);


//2. new style Class syntax 
class OtherShape {
    constructor(posX , posY , color){
        this.posX = posX;
        this.posY = posY;
        this.color = color;
    }

    distance() {
        return `
            DISTANCE : ${Math.sqrt(Math.pow(this.posX, 2) + Math.pow(this.posY, 2))}
        `;
    }

    toString(){
        return `
            X = ${this.posX * this.posX} 
            Y = ${this.posY * this.posY}
            COLOR = ${this.color}
            ${this.distance()}
        `;
    }

}

class OtherCircle extends OtherShape {

    constructor(posX, posY, color, radius){
        super(posX, posY, color);
        this.radius = radius;
        
    }

    static get pai() {
    return 3.14
  }

    toString(){
         return `
            X = ${this.posX * this.posX} 
            Y = ${this.posY * this.posY}
            COLOR = ${this.color}
            ${this.radius}
        `;
    }
    
    getArea(){
        return OtherCircle.pai * (this.radius * this.radius);
    }

    getPerimeter(){
        return OtherCircle.pai *this.radius * 2;
    }
} 



let otherOne = new OtherShape(2,3,'green');
let otherTwo = new OtherCircle(4,5,'blue',5);

// console.log(otherTwo.toString());
// console.log(otherTwo.distance());
// console.log(otherTwo.getPerimeter());
// console.log(otherTwo.getArea());
// console.log(OtherCircle.pai);


// ex2 


