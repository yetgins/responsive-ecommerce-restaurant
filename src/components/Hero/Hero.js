import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from "./Hero.styles";

const Hero = () => {
  const [isOpen,setIsOpen]=useState(false);

  const toggle =()=> {
    setIsOpen(!isOpen)
  };
  return (
    <HeroContainer>
      <NavBar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Order Now</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
