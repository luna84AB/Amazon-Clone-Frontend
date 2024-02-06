// import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format" 
import { useStateValue } from './StateProvider';
import{  useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
function Subtotal() {
    const navigate=useNavigate();
    const[{basket, user},dispatch]=useStateValue();

    const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
  

  

  const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   if (user) {
  //     db.collection("users")
  //       .doc(user?.uid)
  //       .collection("orders")
  //       .orderBy("created", "desc")
  //       .onSnapshot((snapshot) =>
  //         setOrders(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         )
  //       );
  //   } else {
  //     navigate('/login')
  //     // setOrders([]);
  //   }
  // }, [user]);
  return (
<div className="subtotal">
      <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>
          Subtotal({basket.length}items):<strong>{value}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox"/>This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={'$'}
        />   
      <button onClick={(e)=>user?navigate(`/payment`):navigate('/login')}>Proceed to Checkout</button>

    </div>
  
  )
}

export default Subtotal
