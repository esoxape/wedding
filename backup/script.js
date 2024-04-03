document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([58.44895928837045, 16.741560526827133], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([58.44895928837045, 16.741560526827133]).addTo(map)
        .bindPopup('Rönö Kyrka!!!')
        .openPopup();
});

function sendRSVPEmail() {
    window.location.href = "mailto:your-email@example.com?subject=Wedding RSVP&body=Hi,%0D%0A%0D%0AI would like to RSVP for the wedding event.";
}
