const reducer = (state = [], action) => {
    switch (action.type){
        case 'addCartItem':
            {
                // payload nya ada id, title dan price
                const newState = [...state]
                const itemIndex = newState.findIndex( (item) => item.id === action.payload.id )
                if (itemIndex < 0){
                    newState.push({
                        id: action.payload.id,
                        title: action.payload.title,
                        price: action.payload.price,
                        count: 1
                    })
                }else{
                    newState[itemIndex].count += 1
                }
                return newState
            }
        case 'lessCartItem':
            {
                //payload nya id
                const newState = [...state]
                const itemIndex = newState.findIndex( (item) => item.id === action.payload.id )
                if ( newState[itemIndex].count <= 1 ){
                    newState.splice(itemIndex, 1)
                }else{
                    newState[itemIndex].count -= 1
                }
                return newState
            }
        case 'removeCartItem':
            {
                //payload nya id aja
                const newState = [...state]
                newState.splice(action.payload.index, 1)
                return newState
            }
        default:
            return state
    }
}

export default reducer