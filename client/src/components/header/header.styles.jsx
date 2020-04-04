import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    position: fixed;
    z-index: 3;
    background-color: #f2f2f2;
    padding: 0;
    margin: 0;
    background-color: #fff;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1.5px solid #000;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10%;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 900px) {
    width: 50px;
    padding: 0;
  }

  @media screen and (max-width: 900px) {
    width: 55px;
  }

  @media screen and (max-width: 800px) {
    position: relative;
    left: 25px;
    top: 6px;
  }
`;

export const Logo = styled.img`
  position: relative;
  bottom: 9px;

  &:hover {
    opacity: 0.85;
  }

  @media screen and (max-width: 900px) {
    top: 2px;
  }
`;

export const LogoText = styled(Link)`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Pacifico", cursive;
  font-size: 2.5rem;
  text-align: center;
  position: relative;
  top: 15px;
  left: 35px;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 900px) {
    font-size: 2.5em;
    margin-left: -7.5px;
  }

  @media screen and (max-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 15.5%;
    font-size: 3rem;
  }

  @media screen and (max-width: 800px) {
    position: relative;
    bottom: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  color: black;
  font-size: 1.25rem;
  position: relative;
  top: 17.5px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border-radius: 5px;
  }

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const CartIconOptionLink = styled.div`
  /* padding: 10px 15px; */
  color: black;
  font-size: 1.25rem;
  position: relative;
  top: 17.5px;
  cursor: pointer;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  &:hover {
    font-weight: bold;
    color: #000;
    background-color: #f2f2f2;
    border-radius: 5px;
  }

  @media screen and (max-width: 850px) {
    font-size: 1.5rem;
    position: relative;
    right: 10px;
  }
`;
