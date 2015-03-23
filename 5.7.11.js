$(document).ready(function() {

        var coordenadas;
        
        function showPosition(position) {
            console.log("11111,555555");
            coordenadas = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
            
            $("#coord").html(coordenadas);
            console.log("2222222");           
            
            var map = L.map('map').setView([position.coords.latitude, position.coords.longitude],13);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18
            }).addTo(map);
            
            L.marker([position.coords.latitude, position.coords.longitude]).addTo(map).bindPopup("Mi localizacion").openPopup();
        }
                
        function getLocation() {
            if (Modernizr.geolocation) {
                console.log("111111");
                navigator.geolocation.getCurrentPosition(showPosition);
                
            } else {
                alert("no lo soporta");
                //pollifis
            }
        }
               
        getLocation();
        
        
});
