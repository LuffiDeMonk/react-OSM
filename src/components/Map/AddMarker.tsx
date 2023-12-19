import { Marker, useMapEvents } from "react-leaflet"
import { useState } from 'react'
import { LatLng } from "leaflet"
import { useAppDispatch } from "../redux/store"
import { addLocation } from "../redux/MapSlice"

const AddMarker = () => {
    const [position, setPosition] = useState<LatLng | null>(null)
    const dispatch = useAppDispatch()

    useMapEvents({
        click(e) {
            setPosition(e.latlng)
            console.log(e.latlng)
            dispatch(addLocation(e.latlng))
        }
    })

    return position !== null && (
        <Marker position={position}>

        </Marker>
    )
}

export default AddMarker
