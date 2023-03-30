import { createSlice } from "@reduxjs/toolkit"

const initialState = {sessionEmail: '', sessionPassword: ''}

const sessionStorageSliceReducer = createSlice({
    name: 'session',
    initialState: initialState,
    reducers: {
        setSessionEmail(state, action) {
            state.sessionEmail = action.payload
            sessionStorage.setItem('Email', action.payload)
        },
        setSessionPassword(state, action) {
            state.sessionPassword = action.payload
            sessionStorage.setItem('Password', action.payload)
        },
        clearSession(state) {
            sessionStorage.removeItem('Email');
            sessionStorage.removeItem('Password');
            state.sessionEmail = '';
            state.sessionPassword = '';
        }
    }
})

export const sessionStorageSliceReducerActions = sessionStorageSliceReducer.actions
export default sessionStorageSliceReducer.reducer