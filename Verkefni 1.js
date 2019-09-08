"use strict";
/*

Verkefni 1
Baldur Fróði Briem

* 1. Hvað er null og undefined?
* Null er tómt gildi sem verður að vera gefið.
* Undefined er þegar að breyta hefur verið skilgreind án þess að gefa neitt gildi
*/

/*
* 2. Hvað gerir 'use strict' í JavaScript kóða?
* Það segir þýðandanum að hann eigi að vera strangur þegar hann les kóðan.
* Í staðin fyrir að laga vandræði og kvarta ekki undan semíkommum sem vantar og svoleiðis þá hendir það bara út villu.
*/

/*
* 3. Hver er munurinn á let, var og const?
* const er ekki hægt að breyta. Stendur fyrir constant
* Munurinn á let og var er í hvaða scopi það skilgreinir breytuna.
* var skilgreinir innan næstu aðferðar.
* let skilgreinir innan næsta utanliggjandi ramma; sem getur verið smærri en aðferðar-ramminn
*/

/*
* 4. Endurskrifaðu eftirfarandi kóða með for lykkjunni.
* let x = 9;
* while (x >= 1) {
* console.log("hello " + x);
* x = x - 1;
* }
*/

for (let i = 9; i >= 1; i--) {
    console.log("hello " + i);
}

/*
* 5. Skilgreindu sama fallið á þrjá mismunandi vegu.
*/

function david(a, b) {
    return a * b;
}

david = function david(a, b) {
    return a * b;
};

david = (a, b) => a * b;

/*
* 6. Útskýrðu hvað eftirfarandi kóði gerir, hvað gera svigarnir?
* Þetta er nafnlaus aðferð sem er keyrð um leið og hún er búin til með hello world fyrir browser.
* Svigarnir segja þýðandanum að þetta sé nafnlaus aðferð og að það eigi að keyra hana strax.
* (function() { alert('Hello World'); })();
*/
(function() { alert('Hello World'); })();

/*
* 7. Af hverju birtist 1 en ekki 10?
* Í hvaða röð er kóðinn keyrður í raun eftir að JS þýðandinn (e. interpreter) er búinn að fá
* hann til sín? Raðaðu kóðanum rétt fyrir JS þýðandann.
* "use strict";
* let a = 1;
* function b() {
*  a = 10;
*  return;
*  function a() {}
* }
* b();
* console.log(a);
*
* Það birtist 1 vegna þess að það er ekkert prentað út úr b(), heldur bara upphaflega a.
*/
"use strict";
let a = 1;
function b() {
    function a() {}
    a = 10;
    return;
}
b();
console.log(a);

/*
* 8. Leystu lið 20 í Lesson 6 (Arrays) á Udacity
*/
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];
test.forEach(function (item, index) {
    if (item % 3 === 0) {
        test[index] = item + 100
    }
});
console.log(test);

/*
* 9. Leystu lið 22 í Lesson 6 (Arrays) á Udacity
*/
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function (item) {
    return Number((item * 1.15).toFixed(2));
});
console.log(totals);



/*
* 10. Skrifaðu forrit í JavaScript sem sprengir staflan (stack overflow).
*/
function crash() {
    crash()
}
crash();