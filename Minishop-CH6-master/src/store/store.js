import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './cart'
import userSlice from './user'

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlice.reducer
    }
})

export default store