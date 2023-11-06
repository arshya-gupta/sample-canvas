var map = L.map('map').setView([40.61756999, -73.9548453459], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('nyc-data.json')
.then(response => response.json())
.then(data => {

    let markers = [];
    
    document.getElementById('overall').addEventListener('click', function() {

        markers.forEach(marker => {
            map.removeLayer(marker);
        });
        markers = [];

    for (let i = 0; i < data.length; i++) {

        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;

        if (latitude === null || longitude === null) {
           
            continue;
          }

      const circle = L.circle([latitude, longitude],{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });

    markers.push(circle);



  
        console.log(`Latitude ${i + 1}:`, latitude);
        console.log(`Longitude ${i + 1}:`, longitude);
      }
})

document.getElementById('morning').addEventListener('click', function(){

    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];

    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude === null || longitude === null ||(time.getHours() < 5 || time.getHours() >= 12) ) {
           
            continue;
          }
          const circle = L.circle([latitude, longitude],{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
})

document.getElementById('noon').addEventListener('click', function(){

    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];



    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude === null || longitude === null ||(time.getHours() < 12 || time.getHours() >= 17) ) {
           
            continue;
          }
          const circle = L.circle([latitude, longitude],{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
})

document.getElementById('afternoon').addEventListener('click', function(){
    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude === null || longitude === null ||(time.getHours() < 17 || time.getHours() >= 21) ) {
           
            continue;
          }
          const circle = L.circle([latitude, longitude],{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
})

document.getElementById('night').addEventListener('click', function(){
    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude === null || longitude === null ||(time.getHours() >= 5 && time.getHours() < 21)) {
           
            continue;
          }
          const circle = L.circle([latitude, longitude],{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
})

})

.catch(error => console.error('error fetching',  error));