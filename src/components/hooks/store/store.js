import { configureStore } from "@reduxjs/toolkit"
import changeClassReducer from "../changeClassReducer/changeClassReducer"
import checkReducer from "../checkReducer.js/checkReducer"
import loginReducer from "../loginReducer/loginReducer"
import sessionStorageReducer from "../sessionStorageReducer/sessionStorageReducer"
import navbarResponsiveReducer from "../navbarResponsiveReducer/navbarResponsiveReducer"
import changeHeaderOnscrollReducer from "../changeOnscrollHeaderReducer/changeHeaderOnscrollReducer"

const store = configureStore({
    reducer: {
        checker: checkReducer,
        login: loginReducer,
        session: sessionStorageReducer,
        class: changeClassReducer,
        mobileNav: navbarResponsiveReducer,
        onscrollHeader: changeHeaderOnscrollReducer
    }
})

export default store