import { createSlice } from '@reduxjs/toolkit'

export const PageSlice = createSlice({
    name: 'page',
    initialState: {
        loading: true,
    },
    reducers: {
        update: (state, {payload}) => {
            state.loading = payload.status
        },
    },
})

export const { update } = PageSlice.actions

export default PageSlice.reducer