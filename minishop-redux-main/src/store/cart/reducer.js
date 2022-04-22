

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'addCartItem':
            {
                const newState = [...state]
                const itemIndex = newState.finfIndex( item => item.id === action.payload.id )
                if ( itemIndex < 0 ){
                    newState.push({
                        id: action.payload.id,
                        title: action.payload.title,
                        price: action.payload.price,
                        count: 1
                    })
                } else {
                    newState[itemIndex].count += 1
                }
                console.log(newState)
                return newState
            }
        case 'lessCartItem':
            {
                const newState = [...state]
                const itemIndex = newState.findIndex( item => item.id === action.payload.id )
                if ( itemIndex[itemIndex].count <= 1 ){
                    newState.splice(itemIndex, 1)
                } else {
                    newState[itemIndex].count -= 1
                }
                console.log(newState)
                return newState
            }
        case 'removeCardItem':
            {
                const newState = [...state]
                newState.splice(action.payload.id, 1)
                return newState
            }
        default:
            return state
    }
}

export default reducer