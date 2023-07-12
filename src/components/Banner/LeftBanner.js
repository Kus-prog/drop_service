import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["website Development", "App Development", "Logo Design"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, We 're <span className="text-designColor ">bytesNpixcel</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-white">
        bytesNpixcel is a professional website design, website development,
        app development, seo and digital marketing organization that offers
        a full capacity for planning a site and internet marketing at a sensible cost.
        We have highly efficient developers & designers.We provide value to our customers
        by benefits such as quick to market flexible solutions.We are offering best price 
        in this market & providing best quality of work for you. We can assure you that we 
        will provide the best professional and quality service within the time duration.
        </p>
      </div>

     <Media />
    </div>
  );
}

export default LeftBanner;