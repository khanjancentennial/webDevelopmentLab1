class Vehicle {
    constructor(wheels) {
    this.wheels = wheels;
    }
    toString() {
    return '(' + this.wheels + ')';
    }
    }
    class Bike extends Vehicle {
    constructor(color) {
    super(2);
    this.color = color;
    }
    toString() {
    return super.toString() + ' colored: ' + this.color;
    }
    }
    let bike = new Bike('red');
    bike.toString();
    console.log(bike instanceof Bike);
    console.log(bike instanceof Vehicle);