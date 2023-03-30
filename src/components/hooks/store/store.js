import { configureStore } from "@reduxjs/toolkit"
import checkReducer from "../checkReducer.js/checkReducer"
import loginReducer from "../loginReducer/loginReducer"
import sessionStorageReducer from "../sessionStorageReducer/sessionStorageReducer"

const store = configureStore({
    reducer: {
        checker: checkReducer,
        login: loginReducer,
        session: sessionStorageReducer,
    }
})

export default store