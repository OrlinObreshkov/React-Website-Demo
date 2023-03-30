import { createSlice } from "@reduxjs/toolkit"

const initialState = {email: '', password: '', error: null}

const loginSliceReducer = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload
            state.error = null
        },
        setPassword(state, action) {
            state.password = action.payload
            state.error = null
        },
        setError(state, action) {
            state.error = action.payload
        },
        resseter(state) {
            state.email = '';
            state.password = ''
            state.error = null
        }
    }
})

export const loginSliceReducerActions = loginSliceReducer.actions
export default loginSliceReducer.reducer