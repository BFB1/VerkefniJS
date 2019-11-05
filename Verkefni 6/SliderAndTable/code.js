'use strict';
let slider = document.getElementById('slider');
let catTable = document.getElementById('catTable');

// Einfaldur slider
noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});


// Hver köttur á nafn og laun. Einnig hefur klasin reference í HTML röðina sína.
// Hann hengir svo sitt eigið fall í sliderinn og tékkar sjálfur hvort hann eigi að vera sýnilegur þegar sliderinn færist.
function Cat (name, salary) {
    this.catName = name;
    this.salary = salary;
    this.row = CreateCatNode(this.catName, this.salary);
    slider.noUiSlider.on('slide', this.ShouldIBeVisible.bind(this));
}
Cat.prototype.ShouldIBeVisible = function (e) {
    if (e[0] < this.salary && this.salary < e[1]) {
        this.row.style.display = 'table-row';
    } else {
        this.row.style.display = 'none';
    }
};

let catData = [
    {
        name: "Sam",
        salary: 45
    },
    {
        name: "Tigger",
        salary: 89
    },
    {
        name: "Max",
        salary: 56
    },
    {
        name: "Smokey",
        salary: 14
    }
];

// Býr til HTML representation af Ketti.
function CreateCatNode (name, salary) {
    let newRow = document.createElement("tr");
    catTable.children[0].appendChild(newRow);

    let nameCell = document.createElement("td");
    let salaryCell = document.createElement("td");
    newRow.appendChild(nameCell);
    newRow.appendChild(salaryCell);

    nameCell.innerText = name;
    salaryCell.innerText = salary;

    return newRow
}

// Búa til kettina inní töfluna.
let cats = [];
for (let cat of catData) {
    console.log(cat);
    cats.push(new Cat(cat.name, cat.salary))
}