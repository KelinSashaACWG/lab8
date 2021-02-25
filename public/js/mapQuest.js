function initMap() {
	L.mapquest.key = 'r4NnhH8p2DXQOJ2F1IjUfJG4yUMoOAlg';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
 		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	var marker = L.marker([32.88, -117.236]).addTo(map);
}