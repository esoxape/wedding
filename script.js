document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([58.44895928837045, 16.741560526827133], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
    }).addTo(map);

    var beerMugIcon = L.icon({
        iconUrl: 'grill.png',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -30]
    });

    var beerMugMarker = L.marker([58.44845628837045, 16.741100526827133], {icon: beerMugIcon}).addTo(map)
        .bindPopup('Festlokal');

    animateBeerMug(beerMugMarker);


    var otherMarker = L.marker([58.44895928837045, 16.741560526827133]).addTo(map)
        .bindPopup('Rönö Kyrka <br> 610 27 Vikbolandet');

    otherMarker.openPopup();
});

function animateBeerMug(marker) {
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
            iconUrl: currentIcon.options.iconUrl,
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
            popupAnchor: currentIcon.options.popupAnchor
        });
        marker.setIcon(newIcon);

    }, 70); 
}


