import React from "react";
import MedicineForm from "./medicineForm";

const medicineItem=(props)=>{
    // const ctx=useContext(cartContext)
    const addMedicineToCart=()=>{
        
        // ctx.addMedicineToCart()
    }
    return( 
        
        <li key={props.id} >
           
        <h3>{props.name}</h3>
        <h4>{props.description} --
        {"₹"+props.price.toFixed(2)}--
        {props.amount}
        </h4>
        { <MedicineForm id={props.id} addMedicineToCart={addMedicineToCart}></MedicineForm> }
        
        </li>
        
       

)
}


export default medicineItem;