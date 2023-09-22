var map = L.map('map').setView([12, 5], 2);


var geoJson = {
    "type": "FeatureCollection",
          features: [{
          type: 'Feature',
          "geometry": { "type": "Point", "coordinates": [-106.478, 31.754]},
		  "properties": {
              'title': 'El Segundo Barrio, El Paso, Texas',
              'images': [
                ['../images/suarez.png','<em>Benito Juárez</em>. Immortalized hero of Mexican nationalism, defender against foreign intervention, and icon of indigeneity.'],
                ['../images/smiling_girl.png','<em>Laughing Girl</em>. Portrait of a young girl, laughing, two stories tall, with a halo-like frame around her head.'],
                ['../images/virgin_mary.png','Three examples of the <em>Virgin Mary</em> in Segundo Barrio, a figure who represents Catholicism’s strong presence in the borderland.'],
                ['../images/boy_lying.png', '<em>Boy Lying Dead</em>. A symbolic enlargement of death’s unjust and persistent presence for migrant children in the area. Note pedestrian at bottom right for scale.'],
                ['../images/aliens.png', '<em>Borderland Aliens</em>. A rerouting of the term “illegal alien” so often applied to Latinos of color, especially in the border region.'],
                ['../images/pig_trump.png','<em>Pig Trump</em>. Trump painted in a revolting way, inviting mockery as if he’s been caught with his pants down.'],
                ['../images/humptydumpty.png','<em>Humpty Dumpty Trump</em>. Trump diminished in size and nursery rhyme imagery, suggesting his failure is certain, imminent, and irreversible.' ]
              ],
			'article':''
          }
      }, {
          type: 'Feature',
          "geometry": { "type": "Point", "coordinates": [-123.97288585689788, 45.903886579968066]},
          "properties": {
              'title': 'New York City',
              'images': [
                ['','Peter Minuit is credited with the purchase of the island of Manhattan in 1626.'],
                ['','During the mid-19th Century, Broadway was extended the length of Manhattan.'],
                ['','Times Square has the highest annual attendance rate of any tourist attraction in the world.']
              ],
			"article":""
          }
      }]};



// tileLayer
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(map);

let featureGroups = [];
let groupBounds;
let latlngs = [];



function onEachFeature(feature, layer) {
	// does this feature have a property named popupContent?
	if (feature.properties && feature.properties.title) {
	
		var images = feature.properties.images
		var slideshowContent = '';
	
		for (var i = 0; i < images.length; i++) {
			var img = images[i];
	
			slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
								  '<img src="' + img[0] + '" style="max-height:90px; max-width:150px;"/>' +
								  '<div class="caption">' + img[1] + '</div>' +
								'</div>';
			 }
	
		var popupContent = 
							'<div id="' + feature.properties.title + '"class="popup">' +
								'<div class="slideshow">' +
									slideshowContent +
								'</div>' +
								'<div class="cycle">' +
									'<a class="prev" href="#" >&laquo; Previous</a>' +
									'<a class="next" href="#">Next &raquo;</a>' +
								'</div>'+
								'<div class="button"><a href="#' + feature.properties.article+'">Go to the article</a></div>'
							'</div>';
	
		layer
		.bindPopup(popupContent);
		
	}
	  };


L.geoJson(geoJson, {
	pointToLayer: function(feature, latlng) {
		var greenIcon = L.icon({
			iconUrl: "../images/map_marker.png",
			
		
			iconSize:     [25, 42], // size of the icon
			iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
			shadowAnchor: [4, 62],  // the same for the shadow
			popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});
		return L.marker(latlng, {icon: greenIcon});
	},
	onEachFeature: onEachFeature}).addTo(map);


$('#map').on('click', '.popup .cycle a', function() {
	var $slideshow = $('.slideshow'),
		$newSlide;

	if ($(this).hasClass('prev')) {
		$newSlide = $slideshow.find('.active').prev();
		if ($newSlide.index() < 0) {
			$newSlide = $('.image').last();
		}
	} else {
		$newSlide = $slideshow.find('.active').next();
		if ($newSlide.index() < 0) {
			$newSlide = $('.image').first();
		}
	}

	$slideshow.find('.active').removeClass('active').hide();
	$newSlide.addClass('active').show();
	return false;
});

//var markers = [[31.754, -106.478], [ 45.903886579968066, -123.97288585689788,]];
//var currentIndex = 0;

//function panToNextMarker() {
//    if (currentIndex < markers.length) {
//        var marker = markers[currentIndex];
//		map.panTo(new L.LatLng(marker[0], marker[1]), { animate: true });
//		currentIndex = (currentIndex + 1) % markers.length; // Loop back to the first marker if all markers have been visited
//	}
//}

//$(L.marker).on('click', function() {
//	clearInterval(intervalID);// Stop the animation interval
//});




// Set the interval (in milliseconds) between marker transitions
//var interval = 1500; // Adjust this as needed
//var intervalID = setInterval(panToNextMarker, interval);
	
