import React from "react";
import "./Service.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { slidersettings } from "../../utils/sliderSettings";

const Service = () => {
  return (
    <section className="s-wrapper">
      <div className="paddings innerWidth s-container">
        <div className="s-head flexColCenter">
          <span className="text-color text-designColor">Popular Services</span>
        </div>

        <Swiper {...slidersettings}>
          <SliderButtons />
          {data.map((i) => (
            <SwiperSlide key={i}>
              {/* <div className=" flexColStart s-card">
                                 <img src={i.image} alt="home"/>
    
                                 <span className='primaryText'>{i.name}</span>
                                 <span className='secondaryText'>{i.detail}</span>
                                 <button className="e-button">Enquiry Now</button>
                              </div> */}
            
              <div className="w-full p-4 xl:px-12 h-auto xl:py-10 gap-8 xl:gap-14 rounded-lg  flex flex-col  group hover:bg-gradient-to-b hover:from-[#4066ff] hover:[#2949c6] transition-colors duration-1000 s-card">
                <div className="w-full h-[50%] overflow-hidden rounded-lg">
                  <img
                    className="w-full h-70 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                    src={i.image}
                    alt="src"
                  />
                </div>
                <div className="w-full mt-5 flex flex-col  gap-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base uppercase text-designColor font-normal">
                        {i.name}
                      </h3>
                    </div>
                    <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                      {i.detail}
                    </p>
                
                  </div>
                  <button className="e-button">Enquiry Now</button>
                </div>
              </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Service;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter s-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
