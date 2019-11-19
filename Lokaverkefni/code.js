let wrapperNode = document.getElementById('main');

moment.locale('is');

fetch('http://apis.is/concerts').then(response => response.json().then(Start));

function Start(response) {
    let data = response;
    for (let item of data.results) {
        CreateEventElements(item)
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
}