import React,{ useContext } from "react"
import Modal from "../UI/Modal"
import classes from './Cart.module.css'
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
        cartItems=cartItems.map((c)=>{
            console.log(c.id,c.price)
            return(
        <li key={c.id} className={classes.list}>
        <h2 className={classes.price}>{c.name}</h2>
        <div className={classes.price}>{"₹"+c.price.toFixed(2)+"  "} 
       
        <p >  X  {" "+c.amount}</p> 
        <button className={classes.minus} id={c.id} onClick={decreseAmount} >-</button>
        <button className={classes.plus} id={c.id}  onClick={increaseAmount}>+</button>
        </div>
        
        
        </li>)})
console.log(ctx.totalAmount)
        
    return(
        <Modal onClick={props.onCloseCart}>
            <ul >
            {cartItems}
            </ul>
            <div >
                <span>Total Amount -</span>
                <span className={classes.price}>{ctx.totalAmount}</span>
            </div>
            <div >
                <button  onClick={props.onCloseCart}>Close</button>
                <button >Order</button>
            </div>

        </Modal>
    )
}

export default Cart;