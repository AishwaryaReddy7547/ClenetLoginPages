import React, { useState } from "react";
import Image from "next/image";
import "../pages/aboutus.css";
import image2 from '../photos/image2.png';
import ToggleSwitch from "@/components/ToggleSwitch";


const AboutUs = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [buttonColor, setButtonColor] = useState('orangered');

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
    const newColor = isToggleOn ? 'orangered' : 'blue';
    setButtonColor(newColor);
  };

  return (
    <header style={{ backgroundColor: "white" }}>
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
        <a href="/aboutus" style={{ color: "skyblue" }}>
          <b>About Us Template</b>
        </a>
        <a href="/blogs">
          <b>Blogs</b>
        </a>
        <a href="/logogallery">
          <b>Logo Gallery</b>
        </a>
      </div>
      <br />
      <div>
        <h1 style={{ fontSize: 30 }}>
          <b>27 Best About Us and About Me Page</b>{" "}
        </h1>
        <h1 style={{ fontSize: 30 }}>
          <b>Examples of 2023 [+Templates]</b>
        </h1>
        <br />
        <button onClick="#" className="button_content" style={{ backgroundColor: buttonColor, borderRadius: "6px", color: "white", borderColor: "white", cursor: "pointer" }}>Download Now: Free About Us examples</button>
        <br />
        <br />
        <div width={400} style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
          <div align="left">
          <p>Your about page summarizes your history, values, and mission—all in one place.</p>
          <p>That's a tall order for just a few paragraphs. If you're feeling struck, turn to these</p>
          <p>about-page examples for inspiration</p>
          </div>
          <br />
          <Image src={image2} width={400} height={300} />
        </div>
      </div>
    </header>
  );
};

export default AboutUs;
