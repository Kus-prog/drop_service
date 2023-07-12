
import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header =()=>{
    const[menuOpened,setMenuOpened] = useState(false);
    const getMenuStyles=(menuOpened) =>{
        if(document.documentElement.clientWidth <=800){
            return{right:!menuOpened && "-100%"}
        }
    }
    return(
       <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <h2>App Name</h2>
            <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}> 
            <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}>
                <a href="/home"> Home</a>
                <a href="/work"> Our Work</a>
                <a href="/whyUs"> Why Us</a>
                <a href=",price"> Pricing</a>
                <button className="button">
                <a href="/contact"> Contact Us</a>
                </button>
               </div>
               </OutsideClickHandler>
               <div className='menu-icons' onClick={()=>setMenuOpened((prev)=>!prev)}>
               <BiMenuAltRight size={30}/>
               </div>
           
        </div>
       </section>
    );
}

export default Header;