import { LatLng } from "leaflet";
import { Marker } from "react-leaflet";
import { useState } from "react";
import { useMapEvents } from 'react-leaflet/hooks'

const LocationMarker = () => {
    const [position, setPosition] = useState<LatLng | null>(null);
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        }
    })



    return position !== null && (
        <>
            <Marker position={position}>

            </Marker>

        </>
    )

}
export default LocationMarker