import React,{useContext} from "react";
import MedicineForm from "./medicineForm";
import cartContext from "../../Store/Cart-Context";

const MedicineItem=(props)=>{
     const ctx=useContext(cartContext)
    const addMedicineToCart=(amt)=>{
        console.log(amt);
         ctx.addItem({id:props.id,price:props.price,amount:amt,description:props.description,name:props.name})
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


export default MedicineItem;