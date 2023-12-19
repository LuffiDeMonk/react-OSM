import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from './LocationMarker'
import AddMarker from "./AddMarker";
import ViewSelectedAreas from "./ViewSelectedAreas";

export default function LocationContainer() {


    return (
        <div>
            <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={10} scrollWheelZoom={true} style={{ height: '50vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yMRZZ5iBww7qbMkAjHHx"
                />
                <LocationMarker />
                <AddMarker />
                <ViewSelectedAreas />
            </MapContainer>
        </div>
    )
}
