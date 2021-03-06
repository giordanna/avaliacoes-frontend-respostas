console.log('Yet another Hello world');

var map = null;

// referência do marcador selecionado
let markerSelecionado = null;

// referência da infoWindow
let infoWindow = null;

placesOfInterest = [
    { name: 'Charme da paulista', lat: -23.562172, lng: -46.655794 },
    { name: 'The Blue Pub', lat: -23.563112, lng: -46.650338 },
    { name: 'Veloso', lat: -23.585107, lng: -46.635219 },
    { name: 'Let\'s Beer', lat: -23.586508, lng: -46.641739 },
    { name: 'O\'Malley\'s', lat: -23.558296, lng: -46.665923 },
    { name: 'Finnegan\'s', lat: -23.559547, lng: -46.676794 },
    { name: 'Partisans', lat: -23.561049, lng: -46.682555 },
    { name: 'Morrison', lat: -23.555106, lng: -46.690883 },
    { name: 'Cão Véio', lat: -23.558130, lng: -46.679508 },
    { name: 'Cervejaria Nacional', lat: -23.564740, lng: -46.690641 },
    { name: 'Brewdog', lat: -23.561309, lng: -46.693935 },
    { name: 'Rei das Batidas', lat: -23.570613, lng: -46.705977 }
];

const customIcon = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#F7B217',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};

// Questão 1B: criando ícone branco para evento de clique
const customClickedIcon = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#FFF',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};

function addMarker(markerContent) {

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(markerContent.lat, markerContent.lng),
        icon: customIcon,
        title: markerContent.name
    });

    // Questão 1C: adicionando evento de clique para abrir infoWindow
    marker.addListener('click', () => {

        // Questão 1E: mudando ícone do marcador selecionado anterior para o default
        if (markerSelecionado) {
            markerSelecionado.setIcon(customIcon);
        }

        // Questão 1B: mudando de ícone no clique
        marker.setIcon(customClickedIcon);

        markerSelecionado = marker;

        infoWindow.setContent('<h1>' + markerContent.name + '</h1>');
        infoWindow.open(map, marker);
    });
}

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.562172, -46.655794),
        gestureHandling: 'greedy',
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }

    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // inicializando infoWindow
    infoWindow = new google.maps.InfoWindow({
        content: null
    });

    // Questão 1D: voltando a cor original se fechada a infoWindow
    infoWindow.addListener('closeclick', () => {
        if (markerSelecionado) {
            markerSelecionado.setIcon(customIcon);

            markerSelecionado = null;
        }
    });

    // se clicar no mapa também volta tudo ao default e fecha infoWindow
    map.addListener('click', () => {
        if (markerSelecionado) {
            markerSelecionado.setIcon(customIcon);
            infoWindow.close();

            markerSelecionado = null;
        }
    });

    // Questão 1A: adicionando todos os pontos de interesse
    placesOfInterest.map((place) => addMarker(place));

    // Desafio
    document.getElementById('centralizar').addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
  
              map.setCenter(pos);
            }, () => {
                console.error('Ops, o usuário não quis compartilhar localização. Ou você não está usando localhost.');
            });
        } else {
            console.error('Ops, o navegador não tem suporte para geolocalização.');
        }
    });
}