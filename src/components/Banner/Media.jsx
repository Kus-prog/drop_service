import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ">
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon bg-designColor shadow-shadowOne ">
              <FaFacebookF />
            </span>
            <span className="bannerIcon bg-designColor shadow-shadowOne">
              <FaTwitter />
            </span>
            <span className="bannerIcon bg-designColor shadow-shadowOne">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
    
      </div>
  )
}

export default Media;