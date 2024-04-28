import React,{useRef} from "react";

const Form=(props)=>{

   const nameInputRef=useRef();
   const descriptionInputRef=useRef();
   const priceInputRef=useRef();
   const amountInputRef=useRef();

   const addMedicine=()=>{
    const medicine={name:nameInputRef.current.value,
    description:descriptionInputRef.current.value,
    price:+priceInputRef.current.value,
    amount:+amountInputRef.current.value}
    props.addMedicine(medicine)
   }
    return(
        <React.Fragment>
            <form>
                <label htmlFor="name">Medicine Name :</label>
                <input type="text" name="name" id="name" ref={nameInputRef}></input>
                <label htmlFor="description">description :</label>
                <input type="text" name="description" id="description" ref={descriptionInputRef}></input>
                <label htmlFor="price">Price :</label>
                <input type="number" name="price" id="price" min={1} defaultValue={1} ref={priceInputRef}></input>
                <label htmlFor="amount">Amount :</label>
                <input type="number" name="amount" id="amount" min={1} defaultValue={1} ref={amountInputRef}></input>
                <br></br>
                <br></br>
                <input type="button" name="add" id="add" value="Add" onClick={addMedicine}></input>
               
            </form>
        </React.Fragment>
    )

}

export default Form;