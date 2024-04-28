import React,{useState} from "react";
import './App.css';
import Form from "./Components/Form/form"
import Medicines from "./Components/Medicines/medicines"

function App() {
  const [medicine,setMedicine]=useState([{id:1,name:"paracetamol",description:"used for mild fever",price:5,amount:12}])
const [cartIsShown,setCartIsShown]=useState(true);

const addMedicine=(newMedicine)=>{
  setMedicine((prevMedicines)=>{
    newMedicine.id=prevMedicines.length+1;
    return [newMedicine,...prevMedicines]
  })
  console.log(medicine)
}

const enableCart=()=>{
  setCartIsShown(true)
}
const disableCart=()=>{
  setCartIsShown(false)
}

  return (
    <React.Fragment>
    {/* {cartIsShown&&<Cart   onCloseCart={disableCart}></Cart>} */}
     <Form addMedicine={addMedicine}></Form>
    <Medicines Items={medicine}></Medicines> 
  </React.Fragment>
  );
}

export default App;
