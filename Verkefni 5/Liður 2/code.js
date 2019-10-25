'use strict';
let container = document.getElementById("container");
container.innerHTML = "<h1>Baldur Fróði Briem</h1>";

let projectContainer = document.createElement('DIV');
projectContainer.classList.add('blackBorder');
container.appendChild(projectContainer);

let subHeading = document.createElement('h2');
subHeading.innerText = "Verkefni 5.1";
projectContainer.appendChild(subHeading);

let list = document.createElement('ol');
projectContainer.appendChild(list);

let data = [
    'Afhverju er getElementById() fljótleglegasta aðferðin?\n' +
    '\n' +
    'Vegna þess að það er fullvitað að það er bara eitt element með þetta Id og það þarf ekki að\n' +
    'Stíga í gegnum dom\'ið til að finna það.',
    'Hvað er málið með auða hnúta (e. whitespace nodes) og DOM tréið?\n' +
    '\n' +
    'Whitespace node er þegar það er whitespace character utan taga í html skjali. Þetta þarf til þess að halda\n' +
    'HTML skjölum læsilegum en því miður þá koma þeir líka inn í dom\'ið sem við viljum ekki.',
    'Hvað er static og live NodeList, hver er munurinn á NodeList og HTMLCollection?\n' +
    '\n' +
    'Nodlist objectar eru bara live ef þeir eru til í dominu vs Allir objectar í HTMLCollection þurfa að vera live.\n' +
    'Þannig að bæði Nodelist og HTMLCollection eru söfn af Dom nodes. Í HTMLCollection þurfa öll node að vera til\n' +
    'í dominu (live). En Nodelist er meira Abstract og getur innihaldið bæði Static (Ekki til í dominu) og Live nodes',
    'Hvað er event í eftirfarandi kóða og hvað er gert með því?\n' +
    '\n' +
    'Þegar smellt er á linka á þessari síðu gerist ekki neitt nema að "Nope." er prentað í console',
    'Af þremur leiðum til að binda event þá er AddEventListener() nýjust en afhverju er hún\n' +
    'betri en hinar?\n' +
    '\n' +
    'Vegna þess að hún er mest flexible og mengar ekki HTML skjalið.\n' +
    'Hinar leiðirnar eru annaðhvort í HTML skjalinu eða bjóða ekki upp á að hafa marga hlustendur á event.',
    'Hver er munurinn á true og false í AddEventListener?\n' +
    '\n' +
    'useCapture. ef það er gefið true er kallað á þennan listener á undan þeim sem eru fyrir neðan hann í dom tréinu.',
    'this vísar í Event listener á html element en ekki á object. Þú getur notað bind() til að\n' +
    'breyta því, leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console “My\n' +
    'name is Sam“ en ekki undefined.\n\nlet Person = {\n' +
    '    name: \'Sam\',\n' +
    '    sayName: function(){\n' +
    '        console.log(\'My name is \'+ this.name);\n' +
    '    }\n' +
    '};\n' +
    'buttonEl.addEventListener(\'click\', Person.sayName.bind(Person));'
];

for (let i = 0; i < data.length; i++) {
    let newItem = document.createElement('li');
    let textItem = document.createElement('p');
    textItem.innerText = data[i];
    newItem.appendChild(textItem);
    list.appendChild(newItem);
}
