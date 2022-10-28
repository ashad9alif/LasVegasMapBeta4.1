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


