import { configureStore } from "@reduxjs/toolkit"
import checkReducer from "../checkReducer.js/checkReducer"

const store = configureStore({
    reducer: {
        checker: checkReducer
    }
})

export default store