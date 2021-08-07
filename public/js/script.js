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

var eventTwoEl = document.querySelector('#eventTwo');

var eventThreeEl = document.querySelector('#eventThree');


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

            var eventOnedescription = data.events[0].description
            console.log(eventOnedescription)
            eventOneEl.textContent = eventOnedescription

            var eventOnedate = data.events[0].date
            console.log(eventOnedate)
            eventOneEl.textContent = eventOnedate

            var eventOnetime = data.events[0].time
            console.log(eventOnetime)
            eventOneEl.textContent = eventOnetime

            
            // var eventTwoName = data.events[1].name
            // console.log(eventTwoName)
            // eventTwoEl.textContent = eventTwoName

            // var eventTwodescription = data.events[1].description
            // console.log(eventTwodescription)
            // eventTwoEl.textContent = eventTwodescription

            // var eventTwodate = data.events[1].date
            // console.log(eventTwodate)
            // eventTwoEl.textContent = eventTwodate

            // var eventTwotime = data.events[1].time
            // console.log(eventTwotime)
            // eventTwoEl.textContent = eventTwotime


            var eventThreeName = data.events[2].name
            console.log(eventThreeName)
            eventThreeEl.textContent = eventThreeName

            var eventThreedescription = data.events[2].description
            console.log(eventThreedescription)
            eventThreeEl.textContent = eventThreedescription

            var eventThreedate = data.events[2].date
            console.log(eventThreedate)
            eventThreeEl.textContent = eventThreedate

            var eventThreetime = data.events[2].time
            console.log(eventThreetime)
            eventThreeEl.textContent = eventThreetime





        });

}
submitBtnEl.addEventListener('click', function (event) {
    event.preventDefault()
    console.log("hello")
    getEvents()
});