console.log("Hello World")
const corsApiUrl = 'https://cors-anywhere.herokuapp.com/'
var eventsContainerEl = document.querySelector("#events-container");
var EventNameEl = document.querySelector('#event-name');
var EventDescriptionEl = document.querySelector('#event-description');
var EventDateEl = document.querySelector('#event-date');
var EventTimeEl = document.querySelector('#event-time');
var submitBtnEl = document.querySelector('#submitBtn');
var zipInputEl = document.querySelector('#zipInput');

var eventOneEl = document.querySelector('#eventOne');
var descOneEl = document.querySelector('#descOne');
var dateOneEl = document.querySelector('#dateOne');
var timeOneEl = document.querySelector('#timeOne');

var eventTwoEl = document.querySelector('#eventTwo');
var descTwoEl = document.querySelector('#descTwo');
var dateTwoEl = document.querySelector('#dateTwo');
var timeTwoEl = document.querySelector('#timeTwo');

var eventThreeEl = document.querySelector('#eventThree');
var descThreeEl = document.querySelector('#descThree');
var dateThreeEl = document.querySelector('#dateThree');
var timeThreeEl = document.querySelector('#timeThree');


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
            var eventOneName = data.events[0].name
            console.log(eventOneName)
            eventOneEl.textContent = eventOneName

            var eventOneDescription = data.events[0].description
            console.log(eventOneDescription)
            eventOneEl.textContent = eventOneDescription

            var eventOneDate = data.events[0].time_start
            console.log(eventOneDate)
            eventOneEl.textContent = eventOneDate

            var eventOneTime = data.events[0].time
            console.log(eventOneTime)
            eventOneEl.textContent = eventOneTime

            
            var eventTwoName = data.events[1].name
            console.log(eventTwoName)
            eventTwoEl.textContent = eventTwoName

            var eventTwoDescription = data.events[1].description
            console.log(eventTwoDescription)
            eventTwoEl.textContent = eventTwoDescription

            var eventTwoDate = data.events[1].date
            console.log(eventTwoDate)
            eventTwoEl.textContent = eventTwoDate

            var eventTwoTime = data.events[1].time
            console.log(eventTwoTime)
            eventTwoEl.textContent = eventTwoTime


            var eventThreeName = data.events[2].name
            console.log(eventThreeName)
            eventThreeEl.textContent = eventThreeName

            var eventThreeDescription = data.events[2].description
            console.log(eventThreeDescription)
            eventThreeEl.textContent = eventThreeDescription

            var eventThreeDate = data.events[2].date
            console.log(eventThreeDate)
            eventThreeEl.textContent = eventThreeDate

            var eventThreeTime = data.events[2].time
            console.log(eventThreeTime)
            eventThreeEl.textContent = eventThreeTime





        });

}
submitBtnEl.addEventListener('click', function (event) {
    event.preventDefault()
    console.log("hello")
    getEvents()
});