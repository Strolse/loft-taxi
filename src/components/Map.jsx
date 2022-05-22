import React, {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl';
import '../styles/Map.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Ryb2xzZSIsImEiOiJjbDNkOG5nbWowMGQyM29sZnNqdW43ZTY5In0.FoQyIdGOq1qDGV7B6mxcjQ';

const Map = ()=>{
    const mapContainerRef = useRef(null);

    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.312786581010016, 59.93470138710765],
            zoom: 11
            });

            return () => map.remove();
    }, [])


    return (
        <div>
            <div className="map" ref={mapContainerRef}>
            </div>
        </div>
    )
}

export default Map;