import { IoCart } from "react-icons/io5";
import logo from '../logo.png'
import { NavLink } from "react-router-dom";
const Navbar = ({cartItems}) => {
  return (
   <div className=" p-4  w-11/12 max-w-[1070px] mx-auto   ">
    
    <div className=" flex flex-row justify-between  items-center  text-xl  ">
       <NavLink to='/'>
       <img src={logo} className=" w-[200px]"></img>
       </NavLink>
      
      <div className=" flex gap-10">
        <NavLink to='/'>
        <p>Home</p>
        </NavLink>
        
        <NavLink to='/cart'>
          <div className=" relative">
          {
            cartItems.length>0 &&
            <div className=" absolute bg-green-700 rounded-full text-white text-semibold text-sm   w-[20px] animate-bounce right-[-10px] top-[-10px]   flex items-center justify-center">{cartItems.length}</div>
          }
          
        <IoCart/>

        </div>
        </NavLink>
        
        
      </div>
    </div>
   </div>
    );
};

export default Navbar;
