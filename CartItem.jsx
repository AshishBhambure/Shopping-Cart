import { CiTrash } from "react-icons/ci";
const CartItem = ({Item,CartItems,setCartItems,removeHandler}) => {
  return (
     <div className="max-w-[600px] flex items-center justify-center gap-8  mt-3">
 

       <div>
        <img src={Item.image} className=" w-[300px]"></img>
       </div>
       <div className=" flex flex-col gap-5"> 
        <h2 className=" font-semibold text-lg">{Item.title}</h2>

        <p className=" ">{Item.description.substring(0,80)}...</p>
       <div className=" flex w-full justify-between items-center">

       <p className=" font-bold text-green-600">${Item.price}</p>
     
      <div className=" text-2xl  max-w-max rounded-full p-2  hover:cursor-pointer bg-red-300"
        onClick={()=> removeHandler(Item.id)}
      >
      <CiTrash/>
      </div>
     
       </div>
        
         
       </div>
       {/* <div className=" w-[550px] h-[2px] bg-black"></div> */}
     </div>
  );
};

export default CartItem;
