import React, { useEffect, useRef, useState } from 'react';

const LocationsMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

   const locations = [
    { 
      name: 'Abuja Office', 
      city: 'Abuja', 
      lat: 9.072264, 
      lng: 7.491302, 
      region: 'Nigeria',
      address: '1st floor NEXIM House, Plot 975 Cadastral Zone AO, Central Business District, Abuja, Nigeria'
    }
  ];

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (isLoaded && mapRef.current && !mapInstanceRef.current) {
      // Initialize map
      const L = window.L;
      const map = L.map(mapRef.current).setView([20, 0], 2);

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map);

      // Custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
          width: 30px;
          height: 30px;
          background: #ef4444;
          border: 3px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        "><div style="
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "></div></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      });

      // Add markers
      locations.forEach(location => {
        L.marker([location.lat, location.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(`
            <div style="text-align: center; padding: 5px;">
              <strong style="font-size: 16px; color: #1f2937;">${location.city}</strong><br/>
              <span style="color: #6b7280; font-size: 14px;">${location.region}</span>
            </div>
          `);
      });

      mapInstanceRef.current = map;
    }
  }, [isLoaded]);

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '1200px', 
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '30px',
        letterSpacing: '2px'
      }}>
        OUR LOCATIONS
      </h2>
      
      <div style={{
        width: '100%',
        height: '600px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        border: '2px solid #e5e7eb'
      }}>
        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {locations.map((location, index) => (
          <div key={index} style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '10px',
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          onClick={() => {
            if (mapInstanceRef.current) {
              mapInstanceRef.current.setView([location.lat, location.lng], 10);
            }
          }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>
              {location.city}
            </div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>
              {location.region}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsMap;