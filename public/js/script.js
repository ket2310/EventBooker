console.log("Hello World")
const corsApiUrl = 'https://cors-anywhere.herokuapp.com/'
var eventsContainerEl = document.querySelector("#events-container");
var EventNameEl = document.querySelector('#event-name');
var submitBtnEl = document.querySelector('#submitBtn');
var zipInputEl = document.querySelector('#zipInput');

var eventOneEl = document.querySelector('#eventOne');
var descOneEl = document.querySelector('#descOne');
var dateOneEl = document.querySelector('#dateOne');
var bookOneEl = document.querySelector('#bookBtn1');

var eventTwoEl = document.querySelector('#eventTwo');
var descTwoEl = document.querySelector('#descTwo');
var dateTwoEl = document.querySelector('#dateTwo');
var bookTwoEl = document.querySelector('#bookBtn2');

var eventThreeEl = document.querySelector('#eventThree');
var descThreeEl = document.querySelector('#descThree');
var dateThreeEl = document.querySelector('#dateThree');
var bookThreeEl = document.querySelector('#bookBtn3');
var events1;
var events2;
var events3;

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
            dateOneEl.textContent = data.events[0].time_start
            bookOneEl.setAttribute('style', 'visibility: visible');
            events1 = data.events[0];

            eventTwoEl.textContent = data.events[1].name
            descTwoEl.textContent = data.events[1].description
            dateTwoEl.textContent =  data.events[1].time_start
            bookTwoEl.setAttribute('style', 'visibility: visible');
            events2 = data.events[1];

            eventThreeEl.textContent = data.events[2].name
            descThreeEl.textContent = data.events[2].description
            dateThreeEl.textContent =  data.events[2].time_start
            bookThreeEl.setAttribute('style', 'visibility: visible');
            events3 = data.events[2];

            console.log(events1.name)
        });

}

var bookThisEvent =async function (whichEvent) {
    switch (whichEvent) {
        case "bookBtn1":
            var name = events1.name;
            var desc = events1.description;
            var date = events1.time_start;
            var response = await fetch('/api/events/addevent', {
                method: 'POST',
                body: JSON.stringify({ name, desc, date }),
                headers: { 'Content-Type': 'application/json' },
              });
          
              if (response.ok) {
                document.location.replace('/profile');
              } else {
                alert(response.statusText + " Error") ;
              }
            break;

        case "bookBtn2":
            name = events2.name;
            desc = events2.description;
            date = events2.time_start;
            response = await fetch('/api/events/addevent', {
                method: 'POST',
                body: JSON.stringify({ name, desc, date }),
                headers: { 'Content-Type': 'application/json' },
              });
          
              if (response.ok) {
                document.location.replace('/main');
              } else {
                alert(response.statusText + " Error") ;
              }
            break;
        case "bookBtn3":
            name = events3.name;
            desc = events3.description;
            date = events3.time_start;
            response = await fetch('/api/events/addevent', {
                method: 'POST',
                body: JSON.stringify({ name, desc, date }),
                headers: { 'Content-Type': 'application/json' },
              });
          
              if (response.ok) {
                document.location.replace('/main');
              } else {
                alert(response.statusText + " Error") ;
              }
            break;


    }
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


bookTwoEl.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target.id)
    bookThisEvent(event.target.id);
})


bookThreeEl.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target.id)
    bookThisEvent(event.target.id);
})