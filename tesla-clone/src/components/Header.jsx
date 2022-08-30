import React,{useState} from "react";
import BlurOverlay from "./elements/BlurOverlay";
import MenuSidebar from "./MenuSidebar";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (

    <div className="">
      <nav className="flex items-center justify-between fixed px-5 py-2 w-screen z-10">
        <div className="">
          <img
            className="h-16 w-28"
            src="../../assets/tesla.svg"
            alt="huehue"
          />
        </div>

        <div className="hidden lg:block">
            <ul className="flex">
                <li><button className="btn btn-ghost bg-transparent hover:bg-gray-200"> <h1>Model S</h1> </button></li>
                <li><button className="btn btn-ghost bg-transparent hover:bg-gray-200"> <h1>Model X</h1> </button></li>
                <li><button className="btn btn-ghost bg-transparent hover:bg-gray-200"> <h1>Model Y</h1> </button></li>
                <li><button className="btn btn-ghost bg-transparent hover:bg-gray-200"> <h1>Model 3</h1> </button></li>
                <li><button className="btn btn-ghost bg-transparent hover:bg-gray-200"> <h1>Solar Roof</h1> </button></li>
                <li><button className="btn btn-ghost bg-transparent hover:bg-gray-200"> <h1>Solar Panels</h1> </button></li>
            </ul>
        </div>
        
        <div className="hidden lg:block">
            <ul className="flex">
                <li><button className="btn btn-ghost bg-transparent hover:bg-gray-200"> <h1>Shop</h1> </button></li>
                <li><button className="btn btn-ghost bg-transparent hover:bg-gray-200"> <h1>Account</h1> </button></li>
                <li><button onClick={()=> setMenu(!menu)} className="btn btn-ghost bg-transparent hover:bg-gray-200"> <h1>Menu</h1> </button></li>
                </ul>
        </div>

       <MenuSidebar menu={menu} setMenu={setMenu}/>

        <div className="lg:hidden">
            <button onClick={()=> setMenu(!menu)} className="btn btn-ghost bg-gray-300"><h1 className="font-semibold">Menu</h1></button>
        </div>
        
      </nav>

      <BlurOverlay menu={menu}/>
    </div>
  );
};

export default Header;
