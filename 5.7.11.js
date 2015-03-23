$(document).ready(function() {

        var coordenadas;
        
        function showPosition(position) {
            coordenadas = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
            
            $("#coord").html(coordenadas);        
            
            var map = L.map('map').setView([position.coords.latitude, position.coords.longitude],13);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18
            }).addTo(map);
            
            L.marker([position.coords.latitude, position.coords.longitude]).addTo(map).bindPopup("Mi localizacion").openPopup();
        }
                
        function getLocation() {
            if (Modernizr.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
                //Si el navegador lo soporta se metera por aqui y utilizara la funcion navigator.geolocation que soporta.
            } else {                
                /*Si el navegador no lo soporta, se ejecutara las lineas del geo.js que he añadido para polyfill:
                    // Exports
                    if (!navigator.geolocation) {
                        navigator.geolocation = new GeolocationPolyfill();
                    }
                    
                    Ejecutamos la misma linea pero ahora para utilizar navigator.geolocation, tiramos del script del polyfill.
                */
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        }
               
        getLocation();
        
        
});
