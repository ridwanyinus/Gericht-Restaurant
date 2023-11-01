import React from "react";
import { images } from "../../constants";

import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
   <div className="app__header app__wrapper section__padding" id="home ">
      <div className="app__wrapper_info">
         <SubHeading title="Chase the new Flavour" />
         <h1 className="app__header-h1">The key to Fine Dining</h1>
         <p className="p__opensans" style={{ margin: "2rem 0" }}>
            At our charming bistro, you will savor the tantalizing flavors of our carefully crafted dishes. Our diverse menu boasts a delightful selection that caters to a variety of tastes
         </p>
         <button type="button" className="custom__button">
            Explore Menu
         </button>
      </div>

      <div className="app__wrapper_img">
         <img src={images.welcome} alt="header img" />
      </div>
   </div>
);

export default Header;
