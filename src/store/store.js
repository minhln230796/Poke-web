import { configureStore } from '@reduxjs/toolkit'
import myBagReducer from "./reducers/MyBag"
import pageReducer from "./reducers/Page";

export default configureStore({
    reducer: {
        myBag: myBagReducer,
        page: pageReducer
    },
})