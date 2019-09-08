"use strict";

// 1. Búðu til object með upplýsingar um þig
let me = {name: "Baldur", age: 17, human: true, alive: true};

// 2. Notaðu for…in lykkjuna til að birta í console öll eigindin (e. key) ásamt gildum (e. value) í
// objectinu í lið 1.
for (let meKey in me) {
    console.log(meKey, me[meKey])
}


// 3. Bættu við aðferð í objectið sem þú gerðir í lið 1. Aðferðin á að skila streng sem inniheldur
// nafn og aldur.
me.info = function () {
    return (this.name + " " + this.age)
};

// 4. Prentaðu út með console.log() Nonni.
let family = {
    "parents":
        {
            "fathers": [{"name":"Jakob"},{"name":"Nonni"}],
            "mothers":[{"name":"Rakel"},{"name":"Sara"}]
        }
};
console.log(family.parents.fathers[1].name);

// 5. Leystu lið 8 í lesson 7 - Objects á Udacity
let breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

// 6. Leystu lið 9 í lesson 7 - Objects á Udacity

let savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function () {
        return(
            "Welcome!\n" +
            `Your balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`)
    }
};
console.log(savingsAccount.printAccountSummary());

// 7. Leystu lið 12 í lesson 7 - Objects á Udacity

let donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

let donutIdentification = function(donut) {
    console.log(`${donut.type} donuts cost $${donut.cost} each`)
};

donuts.forEach(donutIdentification);

/* 8. Eru öll eigindi (e. properties) í sömu röð og þeim var bætt í object, rökstuddu?

Nei. Það er ekki ætlast til að maður nálgist eigindi hluta eftir staðsetningu í object heldur eftir lykli.
Fyrir ES2015 þá var skilgreiningin á object:

"An object is a member of the type Object. It is an UNORDERED collection of properties each of which contains
a primitive value, object, or function. A function stored in a property of an object is called a method."

*/

/* 9. Útskýrðu hvað eftirfarandi kóði gerir.

let user = { name: "John" }; // Býr til object með eiginleikan name sem er strengurinn "John" og stingur honum í breytuna user
let admin = user; // Lætur breytuna admin benda á hlutinn sem settur var í user breytuna.

Þannig að ef þú breytir user.name í "David" þá breytir það líka admin.name vegna þess að þetta er sami hluturinn

*/

/* 10. Afhverju virkar eftirfarandi?

const user = {
 name: "John"
};

user.age = 25;
alert(user.age); // 25

Vegna þess að hluturinn sjálfur er ekki læstur af const.
Það er ekki hægt að endurskilgreina breytuna user núna vegna þess að hún er læst af const lykilorðinu.
Hún mun alltaf benda á þennan hlut. En hluturinn er ekki læstur. Þannig það er hægt að breyta og bæta við breytum inní hlutnum.

*/
