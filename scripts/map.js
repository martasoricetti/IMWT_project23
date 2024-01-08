var map = L.map('map').setView([12, 5], 2);


var geoJson = {
    "type": "FeatureCollection",
          features: [{
          type: 'Feature',
          "geometry": { "type": "Point", "coordinates": [-106.460953, 	31.772543]},
		  "properties": {
              'title': 'El Segundo Barrio, El Paso, Texas',
              'images': [
                ['images/suarez.png','<em>Benito Juárez</em>. Immortalized hero of Mexican nationalism, defender against foreign intervention, and icon of indigeneity.'],
                ['images/smiling_girl.png','<em>Laughing Girl</em>. Portrait of a young girl, laughing, two stories tall, with a halo-like frame around her head.'],
                ['images/virgin_mary.png','Three examples of the <em>Virgin Mary</em> in Segundo Barrio, a figure who represents Catholicism’s strong presence in the borderland.'],
                ['images/boy_lying.png', '<em>Boy Lying Dead</em>. A symbolic enlargement of death’s unjust and persistent presence for migrant children in the area. Note pedestrian at bottom right for scale.'],
                ['images/aliens.png', '<em>Borderland Aliens</em>. A rerouting of the term “illegal alien” so often applied to Latinos of color, especially in the border region.'],
                ['images/pig_trump.png','<em>Pig Trump</em>. Trump painted in a revolting way, inviting mockery as if he’s been caught with his pants down.'],
                ['images/humptydumpty.png','<em>Humpty Dumpty Trump</em>. Trump diminished in size and nursery rhyme imagery, suggesting his failure is certain, imminent, and irreversible.']
              ],
			'article':'Dreamers and Donald Trump: Anti-Trump Street Art Along the US-Mexico Border',
			'issue':'1'
          }
      	},
		{
		type: 'Feature',
		"geometry": { "type": "Point", "coordinates": [-106.487015, 31.738581]},
		"properties": {
			'title': 'Cement culvert, Juárez, Mexico',
			'images': [
				['images/oil_racism.png','<em>Oi! Racism Stinks</em>. Oi! Racism Stinks. Indicator of ongoing tensions between border patrol and residents on both sides of the border.'],
				['images/berlin_wall.png','<em>Berlin Wall</em>. A parallel label given to the US-Mexico border, in the hopes that it will be torn down one day, too.'],
				['images/che_nelson.png','<em>Nelson Mandela and Che Guevara</em>. Two world-renowned political figures provide a contrast in favorability to depictions of Trump'],
				['images/chulk_trump.png', '<em>Chalk Trump</em>. The figure of Trump is shown on his knees holding his penis, which is pointed towards a globe.'],
				['images/sponge_trump.png', '<em>SpongeBob Trump</em>. SpongeBob Trump. Image ridiculing Presidents Trump and Peña Nieto, specifically portraying their ineptitude and racism.']		
			],
			'article':'Dreamers and Donald Trump: Anti-Trump Street Art Along the US-Mexico Border',
			'issue':'1'
		}
		},
		{
			type: 'Feature',
			"geometry": { "type": "Point", "coordinates": [-117.046623, 32.522499]},
			"properties": {
				'title': 'Tijuana, Mexico',
				'images': [
					['images/tijuana_wall.png','<em>Tijuana Wall Text Sample</em>. From left to right the text reads “Somos America,” “Tear down the wall,” “El arte es una extension de ser,” “Resiste sin odio, sin muros,” “No wall,” and “Haz mas arte.”'],
					['images/butterfly.png','<em>Monarch Butterfly</em>. A dignified symbol of migration. <em>Pinky Kiss</em>. References the separation experienced by family members who are only able to link fingers when they meet at the wall.'],
					['images/love_trumps_hate.png','<em>Love Trumps Hate</em>. This hybrid flag shows the unity of the two countries despite what is perceived as hateful speech by Donald Trump.'],
					['images/fuckTrump.png', '<em>“Fuck Trump” on Grey Wall</em>. Expletive written on possible sight where the Rape Trump mural was.'],
					['images/rape_trump.png', '<em>Rape Trump</em>. A direct reaction to Trump’s claim that Mexican immigrants are rapists. The smaller text is directions to Trump Tower in New York City.'],
					['images/trump_and_four_women.png', '<em>Trump and Four Women of Color</em>. Large mural of Trump alongside four women from Syria, China, Guatemala, and Mexico. Smaller text in the right lower corner reads: “Todos somos migrantes,” which means “We’re all migrants.”']				
				],
				'article':'Dreamers and Donald Trump: Anti-Trump Street Art Along the US-Mexico Border',
				'issue':'1'
			}
		},
		{
			type: 'Feature',
			"geometry": { "type": "Point", "coordinates": [-118.193741, 33.770050]},
			"properties": {
				'title': 'Long Beach, California',
				'images': [
					['images/devil.png','<em>Devil Trump</em>. Trump literally being demonized and marked as a perpetuator of a certain kind of hell.'],
					['images/DACA_void.png','. <em>DACA Void</em>. Cartoon Trump holds and rips a paper in half that says “DACA,” as he glares at two other drawings of Dreamers.'],
					['images/dream_killer.png','<em>The Dream Killer</em>. Large mural of Trump uprooting humans/trees on the US side and dumping them in Mexico.'],
					['images/dreamers.png', '<em>Dreamers</em>. Large mural of Trump as a clown, luring in children with red balloons.']				
				],
				'article':'Dreamers and Donald Trump: Anti-Trump Street Art Along the US-Mexico Border',
				'issue':'1'
			}
		},
	   	{
          type: 'Feature',
          "geometry": { "type": "Point", "coordinates": [114.166667, 22.25]},
          "properties": {
            'title': 'Hong Kong',
			"article":'The King of Kowloon: my search for the cult graffiti prophet of Hong Kong',
			'issue':'1',
			"images": [
				['images/king_of_kowloon.avif', '<em>King of Kowloon photograph</em>. Tsang Tsou-choi, better known as the "King of Kowloon", pictured in 2003.'],
				['images/3504.avif', '<em>A King of Kowloon\'s work</em>. Some of Tsang\'s work at a Star Ferry pier in Hong Kong.'],
				['images/5514.avif', '<em>Calligraphy by Tsang Tsou Choi (left)</em>. It is next to Keith Haring\'s Untitled, 1983 at the preview of an auction at Sotheby\'s Hong Kong in 2015.'],
				['images/1956.avif', '<em>Tsang Tsou-choi at work in 2002</em>.'],
				['images/3118.avif', '<em>A partially revealed work of Tsang\'s under a bridge in Hong Kong</em>.'],
				['images/3051.avif', '<em>Tsang Tsou-choi in 1996</em>.']
			]
          }
      	},
		  {
			type: 'Feature',
			"geometry": { "type": "Point", "coordinates": [36.817223, -1.286389]},
			"properties": {
			  'title': 'Nairobi, Kenya',
			  "article":'Public-making in a pandemic: The role of street art in East African countries',
			  'issue':'1',
			  "images": [
				  ['images/feminists_fighting_against_COVID19.jpg', '<em>Feminsts Fighting Against COVID-19</em> - Mathare Roots Initiative'],
				  ['images/corona_is_real.png', '<em>Corona is Real</em> - Mathare Roots/Msale'],
				  ['images/place-making.png', '<em>Place-making, public engagement community awareness through #TalkingWallProject advocacy in intervention during Covid19</em> - Daddo Omutitii']
			  ]
			}
		},
		{
			type: 'Feature',
			"geometry": { "type": "Point", "coordinates": [30.055666444, -1.939662908]},
			"properties": {
			  'title': 'Kigali, Rwanda',
			  "article":'Public-making in a pandemic: The role of street art in East African countries',
			  'issue':'1',
			  "images": [
				  ['images/the_everyday_fight_against_COVID19.png', '<em>The everyday fight against COVID-19</em> - Innocent Kagabo']
			  ]
			}
		}
	]
};



// tileLayer
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
	ext: 'png'
}).addTo(map);

let featureGroups = [];
let groupBounds;
let latlngs = [];



function onEachFeature(feature, layer) {
	// does this feature have a property named popupContent?
	if (feature.properties && feature.properties.title) {
	
		var images = feature.properties.images;
		var issue = feature.properties.issue;
		var art_title = feature.properties.article;
		var slideshowContent = '';
	
		for (var i = 0; i < images.length; i++) {
			var img = images[i];
	
			slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
								  '<img src="' + img[0] + '" style="max-height:90px; max-width:150px;"/>' +
								  '<div class="caption">' + img[1] + '<br>'+ "From " + '<em>'+ art_title + '</em>'+" in Issue" + issue + '</div>' +
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
								'<div class="button button-popup">Go to the issues</div>'
							'</div>';
		
	
		layer.bindPopup(popupContent);
	}
};


var markersLayer = L.geoJson(geoJson, {
	pointToLayer: function(feature, latlng) {
		var greenIcon = L.icon({
			iconUrl: "images/map_marker.png",
			iconSize:     [25, 42], // size of the icon
			iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
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

// Use event delegation to handle button clicks inside the map container
document.getElementById('map').addEventListener('click', function(event) {
    var target = event.target;
    // Check if the clicked element is a button with the class 'button-popup'
    if (target.classList.contains('button-popup')) {
        // Handle button click event here
        window.location.href = 'article.html'; 
    }
});


$(function loadCovers() {

	// Fetch JSON data
	fetch("articles/articlesJson.json")
		.then((response) => response.json())
		.then((data) => {
			const lastArticlesSec = document.getElementById("last_articles");
			
			// Populate the dropdown options based on JSON data
			data.last_articles.forEach((article) => {
				if (article.cover){
				const cover = article.cover;
				const title = article.title;
				div_card = document.createElement('div');
				div_card.classList.add('card');
				div_card.classList.add('mt-3');
				img = document.createElement('img');
				img.setAttribute('style', 'width:100%')
				img.setAttribute('src', cover);
				div_card.classList.add("art-deco-image");
				div_card.appendChild(img);
				div_container = document.createElement('div');
				div_container.classList.add('container');
				h4 = document.createElement('h4');
				h4.innerHTML = '<b>'+title+'</b>';
				div_container.appendChild(h4);
				div_card.appendChild(div_container);
				lastArticlesSec.appendChild(div_card);
			}
			})})});

function initializeScrolling(columnSelector, fixmeSelector) {
	var col = $(columnSelector);
	var fixme = $(fixmeSelector);
	var fixmeTop = fixme.offset().top;
	var height_logo = document.getElementById('logo').offsetHeight;
	var mediaQuery = window.matchMedia('(min-width: 991px)');

	//scroll event listener on the window
	$(window).scroll(function() {
		// is a method provided by jQuery. 
		//It retrieves the vertical scrollbar position for the first element in the set of matched elements, 
		//which, in this case, is the window. It returns the number of pixels that the document is currently scrolled vertically.
		var currentScroll = $(window).scrollTop();
		var colTop = col.offset().top;
		var colBottom = colTop  + (col.height() - fixme.height());
		var viewportBottom = currentScroll + $(window).height() - fixme.height()

		//The current scroll position is greater than or equal to the top position of the fixed column
		//The top position of the scrolling column is less than or equal to the bottom of the viewport.
		//The bottom of the scrolling column is greater than or equal to the current scroll position.
		if (mediaQuery.matches && currentScroll >= fixmeTop && currentScroll >= colTop && colTop <= viewportBottom && colBottom >= currentScroll) {
			if (fixme.height() <= $(window).height()) {
				fixme.css({
					position: 'fixed',
					top: 45 + height_logo,
					width: fixme.width() // Set the width explicitly
				});
			} else {
				fixme.css({
					position: 'static',
				});
			}
		} else {
			fixme.css({
				position: 'static',
			});
		}
	});
};

// Example usage
initializeScrolling('.scrolling-column1', '#fix-me1');
initializeScrolling('.scrolling-column2', '#fix-me2');
initializeScrolling('.scrolling-column3', '#fix-me3');