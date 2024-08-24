import { LOCATION, markerProps } from './map-data';
import { schemeLayer } from './customization';

async function initYM() {
  const mapContainer = document.querySelector('#map');

  if (!mapContainer) {
    return;
  }

  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

  const map = new YMap(
    mapContainer,
    { location: LOCATION, showScaleInCopyrights: true },
  );

  map.addChild(new YMapDefaultSchemeLayer({
    customization: schemeLayer
  }));

  map.addChild(new YMapDefaultFeaturesLayer());

  const markerElement = document.createElement('img');
  markerElement.className = markerProps.className;
  markerElement.src = markerProps.iconSrc;

  const marker = new YMapMarker(
    {
      coordinates: markerProps.coordinates,
    },
    markerElement
  );

  map.addChild(marker);
}

export { initYM };
