import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet'
import AddMarker from "./AddMarker";
import ViewSelectedAreas from "./ViewSelectedAreas";
import { useEffect, useState } from "react";

type latlng = {
    lat: number,
    lng: number,
}

const CustomMarker = new L.Icon({
    iconUrl: '/location.png',
    iconSize: [40, 40]
})

export default function LocationContainer() {
    const [location, setLocation] = useState<latlng | null>(null);

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            console.warn('Allow location access')
        } else {

            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
            })
        }
    }, [location])

    if (location === null) {
        return (<h1>Map loading...</h1>)
    }

    return (
        <div>
            {location !== null && (
                <MapContainer center={location} zoom={10} scrollWheelZoom={false} style={{ height: '90vh' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yMRZZ5iBww7qbMkAjHHx"
                    />
                    {/* <LocationMarker /> */}
                    <Marker position={location} icon={CustomMarker} />
                    <AddMarker />
                    <ViewSelectedAreas />
                </MapContainer>
            )}
        </div>
    )
}
