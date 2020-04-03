import React from "react";
import { CustomButtonContainer } from "./custom-button.styles.jsx";

const CustomButton = ({ children, ...otherProps }) => ( 
    <CustomButtonContainer className="custom-button" {...otherProps}> 
        {children} 
    </CustomButtonContainer>
);

export default CustomButton;