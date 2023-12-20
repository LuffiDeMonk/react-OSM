import { Marker } from 'react-leaflet'
import { useAppSelector } from '../redux/store'
import { CustomMarker } from './AddMarker';



const ViewSelectedAreas = () => {
    const locationArray = useAppSelector(state => state.map);

    if (locationArray.location !== null) {
        return (
            locationArray.location.map((item, idx) => (
                <Marker key={idx} position={item} icon={CustomMarker} />
            ))
        )
    }

}

export default ViewSelectedAreas
