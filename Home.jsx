import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import toast from "react-hot-toast";
const Home = ({cartItems,setCartItems}) => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false)
  const [posts,setPost] = useState([]);
  
  console.log(cartItems);
   function removeHandler(id){
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
     
  
   }

  async function fetchProductData(){
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data =  await res.json();
      console.log(data);
      setPost(data);
    }
    catch(error)
    {
        toast.error("Something Unexpected Happened !")
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])
  return (
    <div>
       {
         loading &&
         <Spinner></Spinner>
       }
       {
        !loading &&
        <div className=" flex flex-wrap  gap-4 w-11/12 max-w-[1070px] mx-auto mt-8 ">
          {
            posts.length > 0 ? (
              posts.map( (post)=>(
                <Product key={post.id} post = {post} cartItems= {cartItems} setCartItems={setCartItems} removeHandler ={removeHandler}  />
              ))
            ) : (<div> No Data Found</div>)
          }
          </div>
       }
    </div>
  );
};

export default Home;
