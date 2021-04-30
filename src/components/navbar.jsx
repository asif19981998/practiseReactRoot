import React from 'react'
import "./Navbar.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Navbar() {
    return (
        <div>
           <ul class="nav-bar">
           <li ><a >Doctor</a></li>
           <li><a >Hospital</a></li>
           <li><a >Amar Daktar Blog</a></li>
           <li><a >Appoinment</a></li>
           <li >
               <a >Registration ▾</a>
               
               <ul className="dropdown">
                   <li ><a>Dropdown Item</a></li>
                   <li ><a>Dropdown Item</a></li>
                   <li ><a>Dropdown Item</a></li>
                   
               </ul>
            </li>
            
       </ul>
        </div>
    // <ul>
    //     <li><a href="#">Home</a></li>
    //     <li><a href="#">About</a></li>
    //     <li>
    //         <a href="#">Products ▾</a>
    //         <ul class="dropdown">
    //             <li><a href="#">Laptops</a></li>
    //             <li><a href="#">Monitors</a></li>
    //             <li><a href="#">Printers</a></li>
    //         </ul>
    //     </li>
    //     <li><a href="#">Contact</a></li>
    // </ul>

)
}

export default Navbar
