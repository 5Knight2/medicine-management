import { useState } from 'react'
import CartContext from './Cart-Context'

const CartProvider=(props)=>{

    const [items,setItems]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0);

 
        const addItemCartHandler = (item) => {
            const existingItemIndex = items.findIndex((c) => c.id === item.id);
        
            if (existingItemIndex !== -1) {
                const updatedItems = [...items];
                updatedItems[existingItemIndex].amount += item.amount;
                setItems(updatedItems);
            } else {
                setItems((prevState) => [...prevState, item]);
            }
        
            setTotalAmount((amount) => amount + item.price * item.amount);
                
        console.log(items)
    };
    
    
    
    const removeItemFromCartHandler=(id)=>{
        setItems((prevState)=>{
           return prevState.map((c)=>{if( c.id==id && c.amount>0){c.amount=c.amount-1
            setTotalAmount((amount)=>{return amount-c.price})}
        return c})
        })
    }

    const cartContext={
        items:items,
        totalAmount:totalAmount,
        addItem:addItemCartHandler,
        removeItem:removeItemFromCartHandler}

    return(<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)
}

export default CartProvider