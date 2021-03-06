if (document.querySelector('#map')) {
    ymaps.ready(init);
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function init () {
    const selectedCityCoords = document.querySelector(`option[data-contact-id="${getCookie('BITRIX_SM_setCityId')}"]`).value;
    const center = selectedCityCoords ? selectedCityCoords.split(',') : null;

    var myMap = new ymaps.Map('map', {
        center: selectedCityCoords ? center : [59.808459, 30.459113],
        zoom: 9,
        // controls: ['smallMapDefaultSet']
        controls: []
    });

    myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: selectedCityCoords ? center : [59.808459, 30.459113],
        },
    });
    myMap.geoObjects.add(myGeoObject)
    myMap.behaviors.disable('scrollZoom')

    myMap.events.add('click', function(){
        myMap.behaviors.enable('scrollZoom')
    })

    const select = document.querySelector('.contacts__select select');
    const cityList = select.querySelectorAll('[data-city]');
    const cityInfoList = document.querySelectorAll(`[data-city-info]`);

    select.addEventListener('change', () => {
        const coords = select.value.split(',')
        myMap.setCenter(coords)

        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: coords,
            },
        });
        myMap.geoObjects.add(myGeoObject)

        cityList.forEach((cityItem) => {
            cityInfoList.forEach((cityInfoBlock) => {
                cityInfoBlock.style.display = 'none'
                if (cityItem.dataset === cityInfoBlock.dataset) {
                    cityInfoBlock.style.display = 'block'
                }
            })

        })
    })
}

