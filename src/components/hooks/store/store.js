import { configureStore } from "@reduxjs/toolkit"
import changeClassReducer from "../changeClassReducer/changeClassReducer"
import checkReducer from "../checkReducer.js/checkReducer"
import loginReducer from "../loginReducer/loginReducer"
import sessionStorageReducer from "../sessionStorageReducer/sessionStorageReducer"

const store = configureStore({
    reducer: {
        checker: checkReducer,
        login: loginReducer,
        session: sessionStorageReducer,
        class: changeClassReducer
    }
})

export default store