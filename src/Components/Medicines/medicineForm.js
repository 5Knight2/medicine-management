import React,{useRef} from "react";
import classes from './medicineForm.module.css'

const MedicineForm=(props)=>{

    const amountInputRef=useRef();

    const addMedicineToCart=(e)=>{
        e.preventDefault()
        const id=e.target.id.substring(4)

        props.addMedicineToCart(+amountInputRef.current.value)
    }

    return(<React.Fragment>
                 <label htmlFor="amount">Amt:</label>
                <input className={classes.input} type="number" name="amount" id={"amount."+props.id} min={1} defaultValue={1} ref={amountInputRef}></input>
                <input className={classes.add} type="button" name="add" id={"add."+props.id} value="Add" onClick={addMedicineToCart}></input>
                </React.Fragment>
   )}
    export default MedicineForm;