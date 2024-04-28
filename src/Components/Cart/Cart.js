import React,{ useContext } from "react"
import Modal from "../UI/Modal"
import cartContext from "../../Store/Cart-Context"

const Cart=(props)=>{
    let ctx=useContext(cartContext);

    const decreseAmount=(e)=>{
        ctx.removeItem(e.target.id)
    }
    const increaseAmount=(e)=>{
        ctx.addItem({id:e.target.id,amount:1})
    }

    let  cartItems=ctx.items;
        cartItems=cartItems.map((c)=>{return(
        <li key={c.id} >{c.name}"
        <div >
        <div >{"₹"+c.price.toFixed(2)} </div>
       
       
        <span >x{c.amount}</span> 
        <button id={c.id} onClick={decreseAmount} >-</button>
        <button id={c.id}  onClick={increaseAmount}>+</button>
        
        </div>
        </li>)})
console.log(ctx.totalAmount)
        
    return(
        <Modal onClick={props.onCloseCart}>
            <ul >
            {cartItems}
            </ul>
            <div >
                <span>Total Amount</span>
                <span>{ctx.totalAmount}</span>
            </div>
            <div >
                <button  onClick={props.onCloseCart}>Close</button>
                <button >Order</button>
            </div>

        </Modal>
    )
}

export default Cart;