


console.log("Hello World")
const corsApiUrl = 'https://cors-anywhere.herokuapp.com/'
var submitBtnEl = document.querySelector('#submitBtn');
var zipInputEl = document.querySelector('#zipInput');


// This layer will call the events
var getEvents = function () {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  document.location.replace('/findevents')  

}
submitBtnEl.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("hello")
    getEvents()
});


