import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
   <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
         <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
         <SubHeading title="Chef’s Word" />
         <h1 className="headtext__cormorant">What we believe in</h1>
         <div className="app__chef-content">
            <div className="app__chef-content_quote">
               <img src={images.quote} alt="quote" />
               <p className="p__opensans"> What we believe in is providing a dining experience that combines culinary excellence</p>
            </div>
            <p className="p__opensans">
               and a warm atmosphere. Our commitment is to offer a diverse menu, ensuring your satisfaction. Whether you're here for a meal or a casual gathering, what we believe in is creating a
               welcoming ambiance.
            </p>
         </div>

         <div className="app__chef-sign">
            <p className="">Kevin Luo</p>
            <p className="p__opensans">Chef & Founder</p>
            <img src={images.sign} alt="sign" />
         </div>
      </div>
   </div>
);

export default Chef;
