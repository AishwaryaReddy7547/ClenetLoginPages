import React from "react";
import Image from "next/image";
import "../pages/blogs.css";
import image3 from '../photos/image3.png';
import { useState } from "react";
import ToggleSwitch from "@/components/ToggleSwitch";

const Blogs = () => {
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
        <a href="/blogs" style={{color:"skyblue"}}><b> Blogs</b></a>
        <a href="/logogallery"><b>Logo Gallery</b></a>
      </div>
      <br />
      <div className="title_content">
      <h1 style={{fontFamily:"serif"}}>Webiste</h1>&nbsp;&nbsp;&nbsp;
      <h3 style={{fontFamily:"monospace"}}>Tips and tutorilas on how to build better websites</h3>
      </div>
      <div style={{ width: '100%'}} className="centered-content">
      <div style={{ backgroundColor: 'bisque', width: '600px', display: 'flex',margin:"auto" }}>
        <div style={{ flex: '0 0 600px' }}>
          <Image src={image3} width={600} height={200} />
          <div align="left">
          <h1>The 16 Best CMS Systems Today & How to choose</h1>
          <p>
            Compare the ease of use, customizability, and security of these CMS
            platforms so that you can find one that suits your site's needs and
            goals
          </p>
          <br />
          <br />
          <h4>Anna Fitzgerald &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  8/11/22</h4>
          </div>
        </div>
      </div>
    </div>
      </header>
  );
};



export default Blogs;
