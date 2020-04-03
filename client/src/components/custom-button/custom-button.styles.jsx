import styled, { css } from "styled-components";

const buttonStyles = css`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: white;
  color: black;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const newsletterButtonStyles = css`
  min-width: 65px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: white;
  color: black;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: 1px solid black;
  cursor: pointer;
  margin-left: 40px;
  position: relative;
  left: 440px;
  bottom: -8px;

  &:hover {
    background-color: #c7c5c5;
  }
`;

const getButtonStyles = props => {
  if (props.newsletter) {
    return newsletterButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  ${getButtonStyles}
`;
