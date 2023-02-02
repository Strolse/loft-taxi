import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import mapboxgl from 'mapbox-gl';
import './Map.css'
import { drawRoute } from "../../asyncActions/api"

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Ryb2xzZSIsImEiOiJjbDNkOG5nbWowMGQyM29sZnNqdW43ZTY5In0.FoQyIdGOq1qDGV7B6mxcjQ';
function Map ({ isOrdered, coords }) {
    const map = useRef(null);
    const mapContainerRef = useRef(null);

    useEffect(() => {
            map.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/light-v10',
                center: [30.312786581010016, 59.93470138710765],
                zoom: 11
            });

        map.current.on('load', () => {
            if (isOrdered) {
                drawRoute(map.current, coords);
            }
        })

        return () => map.current.remove();
    }, [coords, isOrdered])

    return (
        <div className="map" data-testid="map" ref={mapContainerRef}>
        </div>
    )
};

const mapStateToProps = state => state.order;

export default connect(mapStateToProps)(Map);
