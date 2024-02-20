import { useState } from "react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Body from "./Body";

const Header=()=>{
    const [dark,setDark]=useState(true);
const [menu,setMenu]=useState(false);

    console.log(dark)
    return(
        <div>
            {menu && <div className="shadow-md bg-gray-600 flex justify-between transition delay-150 duration-300 ease-in-out">
                <div><img src="https://avatars.githubusercontent.com/u/120321974?v=4" className="h-14 w-14 m-2 rounded-full">
                </img>
                </div>
                <div className="flex items-center m-3">
                    <ul className="font-bold text-white space-y-5">
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li onClick={()=>{setMenu(!menu)}} className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer m-2"><CloseOutlinedIcon/></li>
                        
                    </ul>
                </div>
                </div>}
        {!menu && 
        <div className="shadow-md flex  bg-white top-0 left-0 w-full justify-between"{...dark?{style:{backgroundColor:"black",color:"white"}}:null}>
            <img className="h-14 w-14 m-2 rounded-full" src="https://avatars.githubusercontent.com/u/120321974?v=4"></img>
            <ul className=" px-4 py-4 ml-[25%] w-[40%] justify-between items-center hidden sm:flex font-bold ">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Skills</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
            <div className="flex items-center justify-between">
               <ul className="flex m-4">
                <li onClick={()=>{setMenu(!menu)}} className=" sm:hidden cursor-pointer "><MenuOutlinedIcon/></li>
               {dark && <li onClick={()=>{setDark(!dark)}} className="cursor-pointer ml-3"><LightModeOutlinedIcon/></li>}
                {!dark && <li onClick={()=>{setDark(!dark)}} className="ml-3 cursor-pointer"><DarkModeOutlinedIcon/></li>}
                </ul> 
            </div>
        </div>
}
        </div>
    )

}
export default Header;