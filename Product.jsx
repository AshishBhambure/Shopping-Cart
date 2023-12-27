import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Product = ({post,cartItems,setCartItems,removeHandler,}) => {
  const [selected,setSelected] = useState(false);
 

  useEffect(()=>{
    const isPostInCart = cartItems.some((item) => item.id === post.id);

    if (isPostInCart) {
       setSelected(true);
    } else {
       setSelected(false);
    }
  },[])
  
 


   let title = post.title.length >14  ? (`${post.title.substring(0,16)}...`) : (post.title);
   let desc= post.description.length > 45 ? (`${post.description.substring(0,45)}...`) : (post.description)
  return (
    <div className=" max-w-[250px]   rounded-md flex flex-col gap-4 items-center px-8  shadow-xl   relative py-2  hover:scale-110  transition-all duration-300">
 <div>
  <p className=" font-bold opacity-80">{title}</p>
 </div>

 <div>
  <p className="  text-xs opacity-55">{desc}</p>
 </div>
 <div>
   <img src={post.image} className=" max-w-[150px] mb-3"></img>
 </div>
 <div>
   <p className=" absolute bottom-2 left-4 text-green-600 font-bold" >${post.price}</p>
 </div>
 <button onClick={ ()=> {setSelected((prev)=> !prev)
      if(selected == false)
      {
       toast.success("Item Added To Cart")
        

      //  This if condition is wrong write cartItems.some here
       if(!cartItems.includes(post.id))
       {
        //  setCartItems(cartItems.push(post));
         setCartItems(prev => [...prev, post]);
        
       }

       }
      else{
        toast.error(" Item Removed  from Cart ")
        
           removeHandler(post.id);
        
      }

 }}>
   {
    selected ? <p className=" absolute bottom-2 right-4 border-[1px] border-black px-3 py-1 rounded-2xl text-sm font-semibold ">Remove Item</p> : <p className=" absolute bottom-2 right-4 border-[1px] border-black px-3 py-1 rounded-2xl text-sm font-semibold ">Add To Card</p>
   }
 </button>
    </div>
  );
};

export default Product;
