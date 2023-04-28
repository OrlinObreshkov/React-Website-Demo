import { createSlice } from "@reduxjs/toolkit"

const initialState = {email: '', address: '', phone: '', message: '', error: null}

const contactsSliceReducer = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload
            state.error = null
        },
        setAddress(state, action) {
            state.address = action.payload
            state.error = null
        },
        setPhone(state, action) {
            state.phone = action.payload
            state.error = null
        },
        setMessage(state, action) {
            state.message = action.payload
            state.error = null
        },
        setError(state, action) {
            state.error = action.payload
        },
        resseter(state) {
            state.email = '';
            state.address = '';
            state.phone = '';
            state.message = '';
            state.error = null
        }
    }
})

export const contactsSliceReducerActions = contactsSliceReducer.actions
export default contactsSliceReducer.reducer