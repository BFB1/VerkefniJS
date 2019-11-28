let wrapperNode = document.getElementById('main');
let searchField = document.getElementById('search');
let dateFromField = document.getElementById('dateFrom');
let dateToField = document.getElementById('dateTo');

// Textaleitin leitar í öllum textagögnunum í gögnunum.
// Öll textagögnin fyrir hlut eru sett í einn uppercase streng með bilum á milli þeirra.
// Svo nota ég bara string.includes() til að leita eftir samsvörun í strengnum.

// Dagatalsvirknin er þannig að ef ekkert hefur verið slegið inn þá birtist allt. Hægt er að hafa bara frá eða bara til
// virkt, eða bæði í einu. Textaleitin og dagatalsleitin virka líka saman.

moment.locale('is');

fetch('https://apis.is/concerts').then(response => response.json().then(Start));

events = [];

function Start(response) {
    let data = response;
    for (let item of data.results) {
        let newElement = CreateEventElements(item);
        let newEvent = new Event(
            item["eventDateName"],
            item["name"],
            item["dateOfShow"],
            item["userGroupName"],
            item["eventHallName"],
            item["imageSource"],
            newElement
        );

        searchField.addEventListener("input", newEvent.CompareCriteria.bind(newEvent));
        dateFromField.addEventListener("input", newEvent.CompareCriteria.bind(newEvent));
        dateToField.addEventListener("input", newEvent.CompareCriteria.bind(newEvent));

        events.push(newEvent)
    }
}

class Event {
    constructor(eventDateName, name, dateOfShow, userGroupName, eventHallName, imageSource, element) {
        this.eventDateName = eventDateName;
        this.name = name;
        this.dateOfShow = new Date(dateOfShow);
        this.userGroupName = userGroupName;
        this.eventHallName = eventHallName;
        this.imageSource = imageSource;

        this.htmlElement = element;

        this.searchSoup = [...eventDateName.split(" "), ...name.split(" "), ...userGroupName.split(" "), ...eventHallName.split(" ")];
        this.searchSoup = this.searchSoup.map(item => item.toUpperCase());
        this.searchSoup = this.searchSoup.join(" ");
    }

    CompareCriteria() {
        let dateFrom = new Date(dateFromField.value);
        let dateTo = new Date(dateToField.value);
        let text = searchField.value.toUpperCase();

        let datePassed;
        if (!(isNaN(dateFrom) || isNaN(dateTo))) {
            datePassed = dateFrom < this.dateOfShow && this.dateOfShow <= dateTo;
        } else if (!isNaN(dateFrom)) {
            datePassed = dateFrom < this.dateOfShow;
        } else if (!isNaN(dateTo)) {
            datePassed = this.dateOfShow <= dateTo;
        } else {
            datePassed = true;
        }

        let searchPassed = this.searchSoup.includes(text);

        if (searchPassed && datePassed) {
            this.htmlElement.style.display = 'block';
        } else {
            this.htmlElement.style.display = 'none';
        }
    }
}

function CreateEventElements(data) {
    let eventWrapper = document.createElement('div');
    eventWrapper.classList.add('concert');

    let img = new Image(285, 190);
    img.src = data["imageSource"];

    let eventName = document.createElement('h4');
    eventName.innerText = data["eventDateName"];

    let eventDate = document.createElement('h4');
    eventDate.innerText = moment(data["dateOfShow"]).format('ll LT');

    eventWrapper.appendChild(img);
    eventWrapper.appendChild(eventName);
    eventWrapper.appendChild(eventDate);

    wrapperNode.appendChild(eventWrapper);
    return eventWrapper;
}