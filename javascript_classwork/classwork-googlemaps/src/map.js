let map = new google.maps.Map(document.getElementById("map"),{
  center: {lat:-5.87907918, lng:39.35215831},
  zoom: 8,
  // styles: 
  //lägg till json styles från mapstyle från slack. Måste även göra en tom json fil i src. 
});

let icon = {
  url: 
  'https://www.stigbertils.com/wp-content/uploads/2020/01/kisspng-google-map-maker-google-maps-computer-icons-map-co-map-marker-5ac6446cec2341.4312359915229430849672.png',
  scaledSize: new google.maps.Size(40,40),
  
};
  

let marker = new google.maps.Marker({
  position: {lat:-5.87907918, lng:39.35215831},
  map: map,
  
  draggable: true,
  icon: icon,
});


console.log(map);
console.log(marker);
console.log(icon);

