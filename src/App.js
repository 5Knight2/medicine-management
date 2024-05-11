import React,{useState} from "react";
import './App.css';
import Form from "./Components/Form/form"
import Medicines from "./Components/Medicines/medicines"
import CartProvider from "./Store/Cart-Provider";
import Cart from "./Components/Cart/Cart";

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
    <CartProvider Items={medicine}>
      <button className="cart" onClick={enableCart}>Cart</button>
     {cartIsShown&&<Cart   onCloseCart={disableCart}></Cart>} 
     <Form addMedicine={addMedicine}></Form>
    <Medicines Items={medicine}></Medicines> 
    </CartProvider>
  );
}

export default App;
