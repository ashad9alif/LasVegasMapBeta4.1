// Add leaflet basemap


map = L.map('map', {
    // center: [36.24550768205646, -115.19151439864532],
    dragging: false,
    zoomControl: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoom: 10,
    zoomSnap: 0.97,
    // zoomDelta: 10.75,
}).setView([36.160, -115.19151439864532], 10.444444);

map.attributionControl.setPrefix('')

//.setView([36.184550768205646,-115.19151439864532], 11); 

// map.options.minZoom = 12;
// map.options.maxZoom = 12;




// L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
//     opacity: 0.9,
//     // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);





// var CanvasLayer = L.geoJSON(CanvasPoly, {
//     style: styleCanvas,
// }).addTo(map);



// function styleCanvas(feature) {
//     return {
//         fillColor: '#FFFFFF',
//         weight: 4,
//         fillOpacity: 1,
//         color: 'white',
//         dashArray: '1',
//         opacity: 0.0,

//     };
// }




function getColor(d) {
    return d == "East Las Vegas" ? '#70C5E8' :
        d == "Summerline Area" ? '#BD3B62' :
            d == "Northwest Las Vegas" ? '#015EB7' :
                d == "North Las Vegas" ? '#A8CC2A' :
                    d == "Henderson & Green Valley" ? '#E38527' :
                        d == "Strip & Downtown" ? '#FFC62D' :
                            '#4ED0C4';
}


function style(feature) {
    return {
        fillColor: getColor(feature.properties.Name),
        weight: 4,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 1,
    };
}





var ZonesLayer = L.geoJSON(Zones, {
    style: style,
    onEachFeature: onEachZone,
}).addTo(map);





var SouthEastLayer = L.geoJSON(SouthEast, {
    style: style_SouthEast,
    onEachFeature: onSouthEast,
}).addTo(map);

function style_SouthEast(feature) {
    return {
        fillColor: '#4ED0C4',
        weight: 4,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 1,
    };
}





var LakeLayer = L.geoJSON(Lake, {
    style: styleLake,
    onEachFeature: onLake,
}).addTo(map);

function styleLake(feature) {
    return {
        fillColor: '#25A9E1',
        weight: 0,
        opacity: 0.1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 1,
    };
}



var CanyonLayer = L.geoJSON(Canyon, {
    style: styleCanyon,
    onEachFeature: onCanyon,
}).addTo(map);

function styleCanyon(feature) {
    return {
        fillColor: '#BB9874',
        weight: 0,
        opacity: 0.1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 1,
    };
}




var ArrowsLayer = L.geoJSON(Arrows, {
    style: styleArrows,
    onEachFeature: onArrows,
}).addTo(map);

function styleArrows(feature) {
    return {
        fillColor: '#256D85',
        weight: 0,
        opacity: 0.1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 1,
    };
}



var RoadLayer = L.geoJSON(RoadData, {
    style: styleRoad,
    onEachFeature: onRoad,
}).addTo(map);



function styleRoad(feature) {
    return {
        fillColor: '#939599',
        weight: 4,
        fillOpacity: 1,
        color: 'white',
        dashArray: '1',
        opacity: 0.0,

    };
}




var myIcon95 = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/I-95.svg/1200px-I-95.svg.png',
    iconSize: [25, 25],
});

var myIcon215 = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/I-215.svg/1200px-I-215.svg.png',
    iconSize: [25, 25],
});

var myIcon15 = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/I-15.svg/1200px-I-15.svg.png',
    iconSize: [25, 25],
});


var marker_15_1 = L.marker([36.2895602, -115.0057936], {
    icon: myIcon15,
}).addTo(map);


// 115.1346435°W 36.2027672°N 
var marker_15_2 = L.marker([36.2027672, -115.1306435], {
    icon: myIcon15,
}
).addTo(map);



var marker_95_1 = L.marker([36.3170287, -115.3051647], {
    icon: myIcon95,
}
).addTo(map);
// 115.3051647°W 36.3170287°N 


// 115.1775324°W 35.9937474°N 

var marker_15_3 = L.marker([35.9937474, -115.1775324], {
    icon: myIcon15,
}
).addTo(map);

// 115.1958451°W 36.1734969°N 
var marker_95_2 = L.marker([36.1734969, -115.1958451], {
    icon: myIcon95,
}
).addTo(map);

// 114.9472101°W 35.9993923°N 
var marker_95_3 = L.marker([35.9993923, -114.9472101], {
    icon: myIcon95,
}
).addTo(map);


// 115.1278225°W 36.2937074°N 
var marker_215_1 = L.marker([36.2937074, -115.1278225], {
    icon: myIcon215,
}).addTo(map);


// 115.2906342°W 36.0898901°N 
var marker_215_2 = L.marker([36.0898901, -115.2906342], {
    icon: myIcon215,
}).addTo(map);


// 115.1323767°W 36.0441236°N 
var marker_215_2 = L.marker([36.0441236, -115.1323767], {
    icon: myIcon215,
}).addTo(map);
