import { configureStore } from "@reduxjs/toolkit";
import reducer from './Slice'
const AppStore = configureStore({
    reducer:{
        slice:reducer
    }
})
export default AppStore;