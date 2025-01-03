import { createContext, useReducer } from "react";
let reducer=(state,action)=>{
    switch(action.type)
    {
        case 'addtocart':return{cartItems:[...state.cartItems,action.payload]}
        case 'remove': return{cartItems:state.cartItems.filter((a)=>a.id !==action.payload.id)}
    }
}


 var CartContext=createContext()
   
 export let CartReducer=({children})=>{
    let [state, dispatch]=useReducer(reducer,{cartItems:[]})
    return(
        <>
        <CartContext.Provider value={{state,dispatch}}>
        {children}

        </CartContext.Provider>
        </>
    )
 }

 export default CartContext