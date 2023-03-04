import { createSlice } from '@reduxjs/toolkit'

export const MyBagSlice = createSlice({
    name: 'myBag',
    initialState: {
        list: window.localStorage.getItem('listPoke') ? JSON.parse(window.localStorage.getItem('listPoke')) : [],
    },
    reducers: {
        add: (state, {payload}) => {
            state.list.push(payload)
            window.localStorage.setItem('listPoke', JSON.stringify(state.list));
        },
        remove: (state, {payload}) => {
            state.list.splice(payload.index, 1)
            window.localStorage.setItem('listPoke', JSON.stringify(state.list));
        },
    },
})

export const { add, remove } = MyBagSlice.actions

export default MyBagSlice.reducer