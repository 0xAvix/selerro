import React from "react";
import "./more-menu-mobile.scss";
import { Link } from "react-router-dom";
// import InfoIcon from "@material-ui/icons/Info";
// import ContactMailIcon from "@material-ui/icons/ContactMail";
// import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const MoreMenuMobile = () => {
  return (
    <div className="more-menu-mobile">
      <div className="more-menu-item">
        <Link to="/about" title="About" className="more-menu-link">
          ABOUT
        </Link>
      </div>
      <div className="more-menu-item">
        <Link to="/contact" title="Contact" className="more-menu-link">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default MoreMenuMobile;
