var map = document.querySelector('.map');

if(map != null) {
  function initMap() {
    var map = new google.maps.Map(document.querySelector('.map'), {
      center: {lat: 59.938549, lng: 30.322993},
      zoom: 17
    });

    var marker = new google.maps.Marker({
      position: {lat: 59.938549, lng: 30.322993},
      map: map,
      title: 'Мишка',
      icon: 'img/icon-map-pin.svg'
    });
  };
}
