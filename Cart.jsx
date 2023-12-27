import { useState } from "react";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = ({cartItems,setCartItems}) => {
var price = 0;
for( let i =0;i<cartItems.length;i++)
{
  price+=cartItems[i].price
}
   
  const navigate = useNavigate();

 function removeHandler(id){

  setCartItems(prevItems=> prevItems.filter(Item => Item.id != id))

 }

  return (
    
     
      <div >
        {
           cartItems.length == 0 ? (
            <div className=" w-[100%] h-[70vh] flex  flex-col items-center justify-center gap-4"> 
               <p className=" text-xl font-semibold">Your Cart is Empty! </p>
               <button className=" px-6 py-3 text-md bg-green-600 text-white rounded-md mt-4 text-xl  " onClick={
                ()=>{
                  navigate("/");
                }
               }> Shop Now </button>
               </div>
          ) : (
            <div className="  flex  flex-row-reverse max-w-[1070px] mx-auto justify-evenly  mt-8">
              {/* Static data */}
              <div className=" flex flex-col  justify-between"> 
                <div className=" w-[200px]">
                 <p className=" tetx-xl text-green-700 font-semibold">Your CART</p>
                 <h1 className=" text-5xl text-green-700 font-bold">SUMMARY</h1>
                 <p className=" text-lg font-semibold ">Total Items {cartItems.length} </p>
                 </div>
                 <div className=" flex flex-col gap-4">
                   <p className=" font-bold text-3xl  ">Total Amount : ${price}</p>
                   <button className=" bg-green-700 py-1 px-4 text-white rounded-lg  text-2xl font-semibold">CHECKOUT NOW</button>
                  </div>
                
                 </div>
              {/* Cards of cart  */}
              <div className=" flex flex-col  gap-12">
              {
            cartItems.map((Item) =>{
              return  (
               <div> 
                 <CartItem Item={Item} removeHandler={removeHandler}></CartItem>
                 <div className=" max-w-[600px] h-[1px] bg-black mt-4"> </div>
                 </div>
              )
              
})
}
</div>
            </div>
          )
        }
            
      </div>
   
  );
};

export default Cart;
