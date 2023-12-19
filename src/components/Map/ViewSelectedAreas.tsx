import { Marker } from 'react-leaflet'
import { useAppSelector } from '../redux/store'

const ViewSelectedAreas = () => {
    const locationArray = useAppSelector(state => state.map);

    if (locationArray.location !== null) {
        return (
            locationArray.location.map((item, idx) => (
                <Marker key={idx} position={item} />
            ))
        )
    }

}

export default ViewSelectedAreas
