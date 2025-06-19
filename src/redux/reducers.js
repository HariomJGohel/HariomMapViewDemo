import { createSlice } from "@reduxjs/toolkit";

const mapData = createSlice({
    name: "mapData",
    initialState: {
        mapData: []
    },
    reducers: {
        setMapData: (state, action) => {
            state.mapData = action.payload;
        },
        addMapData: (state, action) => {
            state.mapData.push({
                place: {
                    name: action.payload.name,
                    name_suffix: action.payload.location,
                    star_rating_unofficial: action.payload.ratings,
                    thumbnail_url: action.payload.imageUrl,
                    location: {
                        lat: action.payload.lat,
                        lng: action.payload.lng,
                    },
                },
            });
        },
    },
});

export default mapData.reducer;
export const { setMapData, addMapData } = mapData.actions;