

function onEachZone(feature, layer) {

// layer.bindTooltip(feature.properties.Name, {permanent: true, direction: "center", className: "my-labels"});
// layer.bindLabel(feature.properties.Name, { 'noHide': true });

 var popup = L.popup();
 console.log(feature.properties.Name);
 popup.setContent(feature.properties.NAME);
 var popupOptions = {
     autoPan: false,
     closeButton: false,
     className: 'popupCustom',
 }

 layer.bindPopup(popup, popupOptions);




 layer.on('mouseover', function (e) {
    // console.log('mouseover', e);

    var popup = e.target.getPopup();
    popup.setLatLng(e.latlng).openOn(map);
    this.setStyle({
        weight: 9,
        color:"#F0E5CF",
        fillColor: "#38E54D",
        fillOpacity: 1,
    });
});







layer.on('mouseout', function (e) {
    console.log('name',e.sourceTarget.feature.properties.Name)
    e.target.closePopup();
    this.setStyle({
        'fillColor': getColor(e.sourceTarget.feature.properties.Name),
        weight: 3,
        color:"#FFFFFF",
    });
});




layer.bindTooltip(layer.feature.properties.Name, {

    permanent: true,

    direction: "center",

    opacity: 1,

    className: 'label-tooltip'

});





layer.on('mousemove', function (e) {
    // console.log('mouseout', e);
    popup.setLatLng(e.latlng).openOn(map);
});



layer.on('click', function (event) {
    var sidebar = L.control.sidebar('sidebar', {
        position: 'left',
        autoPan: false,       // whether to maintain the centered map point when opening the sidebar
        closeButton: false,
    });

    map.addControl(sidebar);
    console.log(feature.properties.ImageURL);
    console.log(feature.properties.Name);

    var name = feature.properties.Name;
    var image = feature.properties.ImageURL;
    var homediv = document.createElement('div');
    // homediv.setAttribute('height', 50)
    // homediv.setAttribute('width', 50);


    var header = document.createElement('h1');
    // header.className = 'title';




    // divImage.setAttribute('height', 500)
    // divImage.setAttribute('width', 500);


    var foter = document.createElement('div');
    foter.className = 'footer';
    var foterDiv = document.createElement('div');
    foterDiv.className = 'desc';
    foterDiv.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius nostrum ea temporibus cupiditate quod vero quia nihil, illo, officia quaerat! Consectetur quia non inventore dignissimos eligendi omnis nobis saepe.";

    var divImage = document.createElement('img');
    divImage.className = 'image-style';


    var foterDivAnchor = document.createElement('a');
    var foterDivAnchorSpan = document.createElement('span');
    var foterDivAnchorSpanIcon = document.createElement('i');



    var closespan = document.createElement('button');
    var closespanIcon = document.createElement('i');
    closespan.className = 'close';
    closespan.className = 'close-button-span';
    closespan.setAttribute('id', 'close-button-span');


    closespan.onclick = callJavascriptFunction;
    closespanIcon.className = 'icon-cross';
    closespan.appendChild(closespanIcon);


    var xx = feature.properties.WebPage 

    foterDivAnchorSpanIcon.className = 'icon-arrow-right';
    foterDivAnchor.className = 'btn btn-small-light with-icon btn-details';
    foterDivAnchor.href = xx;
    header.className = 'name-header';

    header.innerHTML = name;

    

    divImage.setAttribute('src', image);
    homediv.appendChild(header);
    homediv.appendChild(divImage);

    foterDivAnchorSpan.innerHTML = 'Explore >';
    foterDivAnchorSpan.appendChild(foterDivAnchorSpanIcon);
    foterDivAnchor.appendChild(foterDivAnchorSpan);
    foter.appendChild(foterDiv);
    foter.appendChild(foterDivAnchor);


    homediv.appendChild(foter);
    // homediv.appendChild(divImage);
    homediv.appendChild(closespan);
    sidebar.setContent(homediv);

    var visible = sidebar.isVisible();

    console.log('visible', visible);



    sidebar.show();
    const divWithClassExists = document.querySelectorAll(
        'div.leaflet-sidebar.left.visible'
    ).length;

    if (divWithClassExists > 0) {
        console.log('✅ Div with class exists');
        const element = document.querySelectorAll('div.leaflet-sidebar.left.visible');
        const hidden_element = document.querySelectorAll('div.leaflet-sidebar.left');
        console.log('element', element);
        console.log('divWithClassExists', divWithClassExists);
        if (divWithClassExists > 1) {
            console.log('ehhhewn more than 2');
            element[divWithClassExists - 1].remove();
          


            console.log('left', element.length);
        }
        // sidebar.remove();
        sidebar.show();
    } else {
        // sidebar.show();
        console.log('⛔️ Div with class does not exist');
        sidebar.show();

    }

    function callJavascriptFunction() {
        console.log('callJavascriptFunction')
        sidebar.hide()
    }
});


}






function onSouthEast(feature, layer) {
    var popup = L.popup();
    console.log(feature.properties.Name);
    popup.setContent(feature.properties.Name);
    var popupOptions = {
        autoPan: false,
        closeButton: false,
        className: 'popupCustom',
    }
   
    layer.bindPopup(popup, popupOptions);
   
 
   
    layer.on('mouseover', function (e) {
       // console.log('mouseover', e);
   
       var popup = e.target.getPopup();
       popup.setLatLng(e.latlng).openOn(map);
       this.setStyle({
           weight: 9,
           color:"#F0E5CF",
           fillColor: "#38E54D",
           fillOpacity: 1,
       });
   });


   layer.on('mouseout', function (e) {
    console.log('name',e.sourceTarget.feature.properties.Name)
    e.target.closePopup();
    this.setStyle({
        'fillColor': getColor(e.sourceTarget.feature.properties.Name),
        weight: 4,
        color:"#FFFFFF",
    });
});
}






var popupOptions = {
    autoPan: false,
    closeButton: false,
    className: 'popupCustom',
    direction: 'center'
}

function onLake(feature, layer) {

    var popup = L.popup();
    let str_popup = feature.properties.Name;
    popup.setContent(str_popup);
    layer.bindPopup(popup, popupOptions);

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
        this.setStyle({
            'fillColor': '#fec057',
            weight:5,
        });
    });


    layer.on('mouseout', function (e) {
        e.target.closePopup();
        this.setStyle({
            'fillColor': '#25A9E1',
            weight:4,
        });
    });
}




var popupOptions = {
    autoPan: false,
    closeButton: false,
    className: 'popupCustom',
    direction: 'center'
}

function onCanyon(feature, layer) {

    var popup = L.popup();
    let str_popup = feature.properties.Name;
    popup.setContent(str_popup);
    layer.bindPopup(popup, popupOptions);

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
        this.setStyle({
            'fillColor': '#fec057',
            weight:5,
        });
    });


    layer.on('mouseout', function (e) {
        e.target.closePopup();
        this.setStyle({
            'fillColor': '#BB9874',
            weight:4,
        });
    });
}





var popupOptions = {
    autoPan: false,
    closeButton: false,
    className: 'popupCustom',
    direction: 'center'
}

function onArrows(feature, layer) {

    var popup = L.popup();
    let str_popup = feature.properties.Name;
    popup.setContent(str_popup);
    layer.bindPopup(popup, popupOptions);

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
        this.setStyle({
            'fillColor': '#fec057',
            weight:5,
        });
    });


    layer.on('mouseout', function (e) {
        e.target.closePopup();
        this.setStyle({
            'fillColor': '#256D85',
            weight:4,
        });
    });
}





var popupOptions = {
    autoPan: false,
    closeButton: false,
    className: 'popupCustom',
    direction: 'center'
}

function onRoad(feature, layer) {

    var popup = L.popup();
    let str_popup = feature.properties.Name;
    popup.setContent(str_popup);
    layer.bindPopup(popup, popupOptions);

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
        this.setStyle({
            'fillColor': '#062C30',
            weight:5,
        });
    });


    layer.on('mouseout', function (e) {
        e.target.closePopup();
        this.setStyle({
            'fillColor': '#939599',
            weight:4,
        });
    });
}
