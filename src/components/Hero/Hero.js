
import React from 'react';
import './Hero.css';

const Hero =()=>{
    return(
       <section className="hero-wrapper">
        <div className="flexCenter paddings innerWidth hero-container">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                  <div className="orange-circle" />
                    <h1> Discover  <br/> 
                    Most Suitable <br/>
                    Services
                    </h1>
                    </div>
                    <div className="flexColStart hero-desc">
                        <span className="secondaryText">Find the services that suitable for you</span>
                    </div>
                    <div className="flexCenter searchBar">
                        <input type='text'></input>
                        <button className='button'>Search</button>
                    </div>
            

            </div>
           
             <div className="flexCenter hero-right">
            <div className="image-container">

              <img src="./download.png" alt =""></img>
            </div>

            </div> 

        </div>
       </section>
    );
}

export default Hero;