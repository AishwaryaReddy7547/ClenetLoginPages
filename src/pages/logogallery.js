import React from "react";
import "../pages/logogallery.css";
import GridLayout from "@/components/GridLayout";
import { useState } from "react";
import ToggleSwitch from "@/components/ToggleSwitch";

const LogoGallery = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [buttonColor, setButtonColor] = useState('orangered');

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
    const newColor = isToggleOn ? 'orangered' : 'blue';
    setButtonColor(newColor);
  };
  return (
    <header >
             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <ToggleSwitch handleToggle={handleToggle} isToggleOn={isToggleOn} />
        <div>
          <a href="#">High Contrast</a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '8px' }}>
          <a href="/LoginPage">Log in</a>
        </div>
        <div>
          <button
            onClick="#"
            style={{
              backgroundColor: buttonColor,
              borderRadius: '6px',
              color: 'white',
              borderColor: 'white',
              cursor: 'pointer',
            }}
          >
            Start free or get a demo
          </button>
        </div>
      </div>
      </div>
      <br />
      <div className="aboutus_contents">
        <a href="/aboutus"><b>About Us Template</b></a>
        <a href="/blogs" ><b> Blogs</b></a>
        <a href="/logogallery" style={{color:"skyblue"}}><b>Logo Gallery</b></a>
      </div>
      <br />
      <h1 style={{fontFamily:"serif",fontSize:"40px"}}><b>Find the Perfect logo for Dude</b></h1>
      <div style={{margin:"0 auto"}}>
       <GridLayout />
      </div>
      </header>
  );
};



export default LogoGallery;
