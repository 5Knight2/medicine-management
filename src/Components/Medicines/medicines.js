import React from "react";
import MedicineItem from "./medicineItem"

const Medicines=(props)=>{


    const list= props.Items.map((c)=>{return (<MedicineItem  key={c.id} id={c.id} name={c.name} description={c.description} price={c.price} amount={c.amount}></MedicineItem>)})


    return( 
       <ul>{list}</ul> 
  
       

)
}
export default Medicines;