console.log("Hello World")
const corsApiUrl = 'https://cors-anywhere.herokuapp.com/'
var eventsContainerEl = document.querySelector("#events-container");
var EventNameEl = document.querySelector('#event-name');
var submitBtnEl = document.querySelector('#submitBtn');
var zipInputEl = document.querySelector('#zipInput');

var eventOneEl = document.querySelector('#eventOne');
var descOneEl = document.querySelector('#descOne');
var costOneEl = document.querySelector('#costOne');
var bookOneEl = document.querySelector('#bookBtn1');

var eventTwoEl = document.querySelector('#eventTwo');
var descTwoEl = document.querySelector('#descTwo');
var costTwoEl = document.querySelector('#costTwo');
var bookTwoEl = document.querySelector('#bookBtn2');

var eventThreeEl = document.querySelector('#eventThree');
var descThreeEl = document.querySelector('#descThree');
var costThreeEl = document.querySelector('#costThree');
var bookThreeEl = document.querySelector('#bookBtn3');

// This layer will call the events
var getEvents = function () {
    var events = "san-francisco-yelp-10-year-anniversary-celebration ";
    var zipCode = zipInputEl.value;
    fetch(corsApiUrl + 'https://api.yelp.com/v3/events?location=' + zipCode, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer 4FnW2xv5cVqRkDlYYF14_XYL6MmRVN661ctTKgsXOnD5ihmrJ2hqvCoMu0ItSgRlvByZexlvH8QeKxo6XZ8BUvgQolMKmUmsv1ijEsLLdK34XvK0rYqscbmy9wDAYHYx',
            "Content-type": "application/json"
        })
    })
        .then(response => response.json())
        .then(function (data) {

            //log full response
            console.log(data);
            //formatted Event
            eventOneEl.textContent = data.events[0].name
            descOneEl.textContent = data.events[0].description
            costOneEl.textContent = (data.events[0].cost == null ? "" : "$" + data.events[0].cost)
            bookOneEl.setAttribute('style', 'visibility: visible');

            eventTwoEl.textContent = data.events[1].name
            descTwoEl.textContent = data.events[1].description
            costTwoEl.textContent = (data.events[1].cost == null ? "" : "$" + data.events[1].cost)
            bookTwoEl.setAttribute('style', 'visibility: visible');

            eventThreeEl.textContent = data.events[2].name
            descThreeEl.textContent = data.events[2].description
            costThreeEl.textContent = (data.events[2].cost == null ? "" : "$" + data.events[2].cost)
            bookThreeEl.setAttribute('style', 'visibility: visible');

        });

}

var bookThisEvent= function(whichEvent) {

}
submitBtnEl.addEventListener('click', function (event) {
    event.preventDefault()
    console.log("hello")
    getEvents()
});

bookOneEl.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target.id)
    bookThisEvent(event.target.id);
})