import { configureStore } from "@reduxjs/toolkit";
import mapData from "./reducers";

const store = configureStore({
    reducer: { mapData: mapData },
});

export default store;