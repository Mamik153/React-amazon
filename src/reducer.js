export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic
            return { 
                ...state,
                basket: [...state.basket, action.payload]
             };
        case 'REMOVE_FROM_BASKET':
            //logic to remove item
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0) {
                //Item exists remove it
                newBasket.splice(index, 1);
            }else{
                console.warn(`Cant remove product`)
            }
            return { 
                ...state,
                basket: newBasket };
        default:
            return state;
    }
} 

export default reducer;