import React,{useContext} from "react";
import classes from './medicineItem.module.css'
import MedicineForm from "./medicineForm";
import cartContext from "../../Store/Cart-Context";

const MedicineItem=(props)=>{
     const ctx=useContext(cartContext)
    const addMedicineToCart=(amt)=>{
        console.log(amt);
         ctx.addItem({id:props.id,price:props.price,amount:amt,description:props.description,name:props.name})
    }
    return( 
        
        <li className={classes.list} key={props.id} >
           
        <h3 className={classes.content}>{" "+props.name+" "}</h3>
        <h4 className={classes.content}>{props.description} </h4>
        <h4>
        {"₹"+props.price.toFixed(2)}
        </h4>
        <h4>
        qty:{props.amount}
        </h4>
        
       
        { <MedicineForm id={props.id} addMedicineToCart={addMedicineToCart}></MedicineForm> }
        
        </li>
        
       

)
}


export default MedicineItem;