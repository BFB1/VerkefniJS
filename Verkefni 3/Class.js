"use strict";

class SpaceShip {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.life = 10
    }
    fly() {
        this.speed++;
    }
}

let f1 = new SpaceShip("Steven", 0);
let f2 = new SpaceShip("David", 10);
let f3 = new SpaceShip("Beatrix", 11);

f1.fly();