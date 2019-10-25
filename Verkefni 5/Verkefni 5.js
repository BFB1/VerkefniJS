// 1.

// a) Afhverju er getElementById() fljótleglegasta aðferðin?

// Vegna þess að það er fullvitað að það er bara eitt element með þetta Id og það þarf ekki að
// Stíga í gegnum dom'ið til að finna það.

// b)

// Whitespace node er þegar það er whitespace character utan taga í html skjali. Þetta þarf til þess að halda
// HTML skjölum læsilegum en því miður þá koma þeir líka inn í dom'ið sem við viljum ekki.

// c)

// Nodlist objectar eru bara live ef þeir eru til í dominu vs Allir objectar í HTMLCollection þurfa að vera live.
// Þannig að bæði Nodelist og HTMLCollection eru söfn af Dom nodes. Í HTMLCollection þurfa öll node að vera til
// í dominu (live). En Nodelist er meira Abstract og getur innihaldið bæði Static (Ekki til í dominu) og Live nodes

// d)

// Þegar smellt er á linka á þessari síðu gerist ekki neitt nema að "Nope." er prentað í console

// e)

// Vegna þess að hún er mest flexible og mengar ekki HTML skjalið.
// Hinar leiðirnar eru annaðhvort í HTML skjalinu eða bjóða ekki upp á að hafa marga hlustendur á event.

// f)

// useCapture. ef það er gefið true er kallað á þennan listener á undan þeim sem eru fyrir neðan hann í dom tréinu.

// g)

let Person = {
    name: 'Sam',
    sayName: function(){
        console.log('My name is '+ this.name);
    }
};
buttonEl.addEventListener('click', Person.sayName.bind(Person));