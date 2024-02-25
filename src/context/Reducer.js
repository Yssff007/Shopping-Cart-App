export const cartReducer= (state,action) =>{
  switch (action.type) {
    case 'ADD-TO-CART' :
      return {
        ...state, cart:[...state.cart,{...action.payload,qty:1}]
      };
    case 'REMOVE-FROM-CART':
      return {
        ...state,cart:state.cart.filter((p) => p.id !== action.payload.id)
      };
    case 'CHANGE-QTY':
      return {
        ...state,cart:state.cart.filter((p)=>(p.id === action.payload.id)? (p.qty = action.payload.qty):(p.qty))
      };  
    
    default:
      return state;
  };
}