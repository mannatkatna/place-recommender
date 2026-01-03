import { useEffect, useRef } from "react";

export default function MapPanel({ location, places, activePlaceId }) {
  const mapRef = useRef(null);
  const map = useRef(null);
  const markers = useRef([]);

  useEffect(() => {
    if (!location) return;
    if (!window.google || !window.google.maps) return;
    if (map.current) return;

    map.current = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 14,
      disableDefaultUI: true
    });

    new window.google.maps.Marker({
      position: location,
      map: map.current,
      label: "You"
    });
  }, [location]);

  useEffect(() => {
    if (!map.current || !window.google) return;

    markers.current.forEach(m => m.setMap(null));
    markers.current = [];

    places.forEach(place => {
      const isActive = place.id === activePlaceId;

      const marker = new window.google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: map.current,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: isActive ? 10 : 6,
          fillColor: isActive ? "#4f46e5" : "#9ca3af",
          fillOpacity: 1,
          strokeWeight: 0
        }
      });

      markers.current.push(marker);
    });
  }, [places, activePlaceId]);

  return <div ref={mapRef} className="map-container" />;
}

// useRef for non react obj, no re-renders