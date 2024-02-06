
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect} from "react";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";
const promise=loadStripe(
  'pk_test_51NZjJlFjixT0xODn23fVjA5UgBRL47CHc7tJRWKU6RYLyZrdbKDX2gDquIYxIU98haGM8C6xfKM4JAYJkSfVd5iF00JIBbmpPA'  
);

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={
            <>
            <Header/> <Login/>
            </>
            } />
          <Route path="/payment"
           element ={
            <>
            <Header/>
             <Elements stripe={promise}> 
               <Payment/> 
             </Elements> 
          </>
          }
          />
          <Route path="/orders" element={
            <>
            <Header/> 
            <Orders/>
            </>
            } />
          <Route
            path="/"
            element={
              <>
                <Header /> 
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                 <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;