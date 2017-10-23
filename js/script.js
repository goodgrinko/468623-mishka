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

var btn = document.querySelector('.btn--order');
var btnItem = document.querySelectorAll('.item__cart');
var modalCart = document.querySelector('.overlay');

if (modalCart!= null) {
  btn.addEventListener('click' function(){
    modalCart.classList.add('overlay--active');
  });

  btnItem.addEventListener('click' function(){
    modalCart.classList.add('overlay--active');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalCart.classList.contains('overlay--active')) {
        modalCart.classList.remove('overlay--active');
      }
    }
  });
}
