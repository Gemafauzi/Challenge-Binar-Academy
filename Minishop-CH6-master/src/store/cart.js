import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addCartItem: (state, action) => {
            const itemIndex = state.items.findIndex( item => item.id === action.payload.id )
            if ( itemIndex < 0) {
                state.items.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    count: 1
                })
            } else {
                state.items[itemIndex].count += 1
            }
        },
        lessCartItem: (state, action) => {
            const itemIndex = state.items.findIndex( item => item.id === action.payload.id )
            if ( state.items[itemIndex].count <= 1 ) {
                state.items.splice(itemIndex,1)
            } else {
                state.items[itemIndex].count -= 1
            }
        },
        removeCartItem: (state, action) => {
            state.items.splice(action.payload.index, 1)
        }
    }
})

export default cartSlice