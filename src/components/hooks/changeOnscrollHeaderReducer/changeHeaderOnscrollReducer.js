import { createSlice } from "@reduxjs/toolkit"

const initialState = {headerClass: 'header'}

const changeHeaderOnscroll = createSlice({
    name: 'headerOnscroll',
    initialState: initialState,
    reducers: {
        mainHeader(state) {
            state.headerClass = 'header'
        },
        onscrollHeader(state) {
            state.headerClass = 'header-onScroll'
        }
    }
})

export const changeHeaderOnscrollActions = changeHeaderOnscroll.actions
export default changeHeaderOnscroll.reducer