import React from "react";

import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
   <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
         <img src={images.G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">
         <div className="app__aboutus-content_about">
            <h1 className="headtext__cormorant">About Us</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">
               At our exquisite eatery, you'll discover a dining experience that combines culinary expertise with a touch of elegance. Our menu features a delectable array of dishes that will
               tantalize your taste buds
            </p>
            <button className="custom__button" type="button">
               Know More
            </button>
         </div>
         <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="knife" />
         </div>

         <div className="app__aboutus-content_history">
            <h1 className="headtext__cormorant">Our History</h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">
               At our restaurant, you'll experience a variety of dishes. Our diverse menu caters to your tastes. Whether you're here for a meal or a casual gathering, our restaurant offers a welcoming
               ambiance.
            </p>
            <button className="custom__button" type="button">
               Know More
            </button>
         </div>
      </div>
   </div>
);

export default AboutUs;
