var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 22.307159, lng: 73.181221},
    zoom: 8
  });
}