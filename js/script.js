//accordion cards

$('#myCollapsible').collapse({
  toggle: false
})

//google map

map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});


var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

//<button onclick="myFunction()">Click me</button>