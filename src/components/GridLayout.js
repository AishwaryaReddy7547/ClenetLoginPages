import React from 'react';
import Image from 'next/image';
import image4 from '../photos/image4.png';
import Grid from '@mui/material/Grid';
import './GridLayout.css';
import heart from "../photos/heart.png";


const GridLayout = () => {
  return (
    <div class="outer_container">
     <div class="centered_grid_container">
    <div class="grid_wrapper">
      <Grid container spacing={5} className="grid_container">
      <Grid  className="inner_elements" item xs={2.7}>
        <Image src={image4} alt="image" width="auto" height={200}></Image>
        <Image className="heart_image" src={heart} alt="heart" height={20}></Image>
      </Grid>
      <Grid item className="inner_elements" xs={2.7}>
        <Image src={image4} alt="image" width="auto" height={200}/>
        <Image className="heart_image" src={heart} alt="heart" height={20}></Image>
      </Grid>
      <Grid item className="inner_elements" xs={2.7}>
        <Image src={image4} alt="image" width="auto" height={200} />
        <Image className="heart_image" src={heart} alt="heart" height={20}></Image>
      </Grid>
      <Grid item className="inner_elements" xs={2.7}>
        <Image src={image4} alt="image" width="auto" height={200} />
        <Image className="heart_image" src={heart} alt="heart" height={20}></Image>
      </Grid>
    </Grid>
    </div>
    <div class="grid_wrapper">
      <Grid container spacing={5} className="grid_container">
      <Grid className="inner_elements" item xs={2.7}>
        <Image src={image4} alt="image" width="auto" height={200}></Image>
        <Image className="heart_image" src={heart} alt="heart" height={20}></Image>
      </Grid>
      <Grid className="inner_elements" item xs={2.7}>
        <Image src={image4} alt="image" width="auto" height={200}/>
        <Image className="heart_image" src={heart} alt="heart" height={20}></Image>
      </Grid>
      <Grid className="inner_elements" item xs={2.7}>
        <Image src={image4} alt="image" width="auto" height={200} />
        <Image className="heart_image" src={heart} alt="heart" height={20}></Image>
      </Grid>
      <Grid className="inner_elements" item xs={2.7}>
        <Image src={image4} alt="image" width="auto" height={200} />
        <Image className="heart_image" src={heart} alt="heart" height={20}></Image>
      </Grid>
    </Grid>
    </div>
    </div>
    </div>
  );
}

export default GridLayout;
