'use client';

import { useEffect, useRef } from 'react';
import type L from 'leaflet';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  address: string;
  title: string;
  className?: string;
}

export default function MapComponent({
  latitude,
  longitude,
  zoom = 15,
  address,
  title,
  className = "h-96 lg:h-full"
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initializeMap() {
      try {
        // Dynamic import to avoid SSR issues
        const L = (await import('leaflet')).default;

        // Fix for default markers in Next.js
        const iconRetinaUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png';
        const iconUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png';
        const shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png';

        const DefaultIcon = L.icon({
          iconRetinaUrl,
          iconUrl,
          shadowUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        L.Marker.prototype.options.icon = DefaultIcon;

        if (!mapRef.current || !isMounted) return;

        // Initialize map
        const map = L.map(mapRef.current).setView([latitude, longitude], zoom);
        mapInstanceRef.current = map;

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add marker
        const marker = L.marker([latitude, longitude]).addTo(map);
        
        // Add popup
        marker.bindPopup(`
          <div class="text-center" style="font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="font-weight: 600; color: #111827; margin-bottom: 8px; font-size: 14px;">${title}</h3>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">${address}</p>
            <a 
              href="https://maps.google.com/?q=${encodeURIComponent(address)}" 
              target="_blank" 
              rel="noopener noreferrer"
              style="
                display: inline-block;
                padding: 6px 12px;
                background-color: #2563eb;
                color: white;
                font-size: 12px;
                font-weight: 500;
                border-radius: 6px;
                text-decoration: none;
                border: 1px solid #2563eb;
                transition: all 0.2s;
              "
              onmouseover="this.style.backgroundColor='#1d4ed8'; this.style.borderColor='#1d4ed8';"
              onmouseout="this.style.backgroundColor='#2563eb'; this.style.borderColor='#2563eb';"
            >
              Get Directions
            </a>
          </div>
        `).openPopup();

      } catch (error) {
        console.error('Error loading map:', error);
        // Fallback content
        if (mapRef.current && isMounted) {
          mapRef.current.innerHTML = `
            <div class="h-full bg-gray-100 flex items-center justify-center text-center p-4">
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">${title}</h3>
                <p class="text-sm text-gray-600 mb-3">${address}</p>
                <a 
                  href="https://maps.google.com/?q=${encodeURIComponent(address)}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          `;
        }
      }
    }

    initializeMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, zoom, address, title]);

  return <div ref={mapRef} className={className} />;
}