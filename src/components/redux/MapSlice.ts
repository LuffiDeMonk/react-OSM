import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type location = {
    lat: number,
    lng: number
}

type initialState = {
    location: location[]
}

const initialState: initialState = {
    location: []
}

const MapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        addLocation: (state, action: PayloadAction<location>) => {
            state.location.push(action.payload)
        }
    }
})


export const { addLocation } = MapSlice.actions
export default MapSlice.reducer;
