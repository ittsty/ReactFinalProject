import { ADD_TO_CART } from "../Actions/cartAction"

const initState = {
    cart : [],
    item :0    
}

const cartReducer = (state = initState,action) => {

    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload.cart, 
                item: action.payload.item
            }
            default:
                break;
    }

    return state

}
export default cartReducer