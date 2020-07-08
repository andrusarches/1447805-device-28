function initMap() {
  var device = {lat:55.687031, lng:37.529618};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: device});
  var marker = new google.maps.Marker({position: device, map: map});
}
