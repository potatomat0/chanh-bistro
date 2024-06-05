var map = L.map("map").setView([10.7727745, 106.6955122], 18);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var circle = L.circle([10.7727745, 106.6955122], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 16,
}).addTo(map);
