"use strict";

function SpaceShip (name, speed, life) {
    this.name = name;
    this.speed = speed;
    this.life = life
}

SpaceShip.prototype.fly = function () {
    this.speed++;
};


let f1 = new SpaceShip("Steven", 0, 10);
let f2 = new SpaceShip("David", 10, 10);
let f3 = new SpaceShip("Beatrix", 11, 10);

f1.fly();