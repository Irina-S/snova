$(document).ready(function(){

    ymaps.ready(init);
  
    function init() {
  
    //   try{
      const centerMap1 = $(window).innerWidth()>991?[52.03823580508177,113.49829303704823]:[52.03823580508177,113.49829303704823];
  
      var map1 = new ymaps.Map("map", {
          center: centerMap1,
          controls: [],
          zoom: 15
        });
  
        point1_1 =  new ymaps.Placemark([52.03823580508177,113.49829303704823], {
          balloonContent: ''
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-pointer.svg',
          iconImageSize: [72, 84],
          iconImageOffset: [-30, -60]
        });
  
  
        map1.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
        map1.behaviors.disable('scrollZoom');
        map1.controls.add('zoomControl');
  
        map1.geoObjects.add(point1_1);
  
    //   }catch(e){}

    }
  
  });
  