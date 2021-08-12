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


var bookThisEvent = async function (whichEvent) {
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
                document.location.replace('/main');
            } else {
                alert(response.statusText + " Error");
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
                alert(response.statusText + " Error");
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
                alert(response.statusText + " Error");
            }
            break;
    }
}

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
