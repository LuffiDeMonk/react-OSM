import { Marker, useMapEvents } from "react-leaflet"
import { useState } from 'react'
import L, { LatLng } from "leaflet"
import { useAppDispatch } from "../redux/store"
import { addLocation } from "../redux/MapSlice"

export const CustomMarker = new L.Icon({
    iconUrl: '/thumbstack.png',
    iconSize: [40, 40]
})

const AddMarker = () => {
    const [position, setPosition] = useState<LatLng | null>(null)
    const dispatch = useAppDispatch()

    useMapEvents({
        click(e) {
            setPosition(e.latlng)
            dispatch(addLocation(e.latlng))
        }
    })

    return position !== null && (
        <Marker position={position} icon={CustomMarker}>

        </Marker>
    )
}

export default AddMarker
