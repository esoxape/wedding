document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([58.44895928837045, 16.741560526827133], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
    }).addTo(map);


    addAnimatedMarker([58.44845628837045, 16.741100526827133], 'grill.png', 'Festlokal', map);
    addAnimatedMarker([58.59092948182992, 16.187712891406548], 'bus.png', 'The Lamp Hotel <br> Hospitalsgatan 5, 602 27 Norrköping', map);
    var otherMarker = L.marker([58.44895928837045, 16.741560526827133]).addTo(map)
        .bindPopup('Rönö Kyrka <br> 610 27 Vikbolandet');
    otherMarker.openPopup();
});

function addAnimatedMarker(position, iconFile, popupText, map) {
    var icon = L.icon({
        iconUrl: iconFile,
        iconSize: [30, 30],
        iconAnchor: [15, 15], 
        popupAnchor: [0, -30] 
    });

    var marker = L.marker(position, {icon: icon}).addTo(map)
        .bindPopup(popupText);

    animateMarker(marker, iconFile); 
}

function animateMarker(marker, iconFile) {
    var maxSize = 70;
    var minSize = 50;
    var size = minSize;
    var growing = true;

    var animationInterval = setInterval(function() {
        var currentIcon = marker.getIcon();
        if (growing) {
            size += 1;
            if (size >= maxSize) {
                growing = false;
            }
        } else {
            size -= 1;
            if (size <= minSize) {
                growing = true;
            }
        }

        var newIcon = L.icon({
            iconUrl: iconFile, 
            iconSize: [size, size], 
            iconAnchor: [size / 2, size / 2], 
            popupAnchor: currentIcon.options.popupAnchor 
        });
        marker.setIcon(newIcon);
    }, 70);
}
