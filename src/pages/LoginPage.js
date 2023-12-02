import React from 'react';
import Image from 'next/image';
import './LoginPage.css';
import handlogo from '@/photos/handlogo.png';
import googlelogo from '@/photos/googlelogo.png';
import facebooklogo from '@/photos/facebooklogo.png';
import githublogo from '@/photos/githublogo.png';
import twitterlogo from '@/photos/twitterlogo.png';
import image1 from '@/photos/image1.png';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="homepage_components">
      <Image src={image1} alt="Materialize logo" width={800} height={500} />
      <div> <div className="starting_Contents">
      <h3>Welcome to Materialize!</h3>
      <div className="logo-container">
      <Image src={handlogo} alt="Materialize logo1" width={20} height={20} />
      </div>
       </div>
      <h4>Please sign in to your account and start the adventure.</h4>
      <form>
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br /><br />
        <div class="contents">
       <div class="remember">
        <input type="checkbox" name="rememberMe" id="rememberMe" />
        <label for="rememberMe">Remember Me</label>
        </div>
       <div class="forgot-password">
       <a href="/forgot-password">Forgot Password?</a>
       </div>
        </div>

         <br />
         <br />
        <button type="submit">LOGIN</button>

        <p align="center">New on our platform? <a href="/signup">Create an account</a></p>
        <div class="line-with-text">
         <hr />
         <p>or</p>
         <hr />
         </div>
        <div className="logos_content" >
        <Image src={googlelogo} alt="Google logo" width={30} />
        <Image src={facebooklogo} alt="facebook logo" width={30} />
        <Image src={twitterlogo} alt="twitter logo" width={30} />
        <Image src={githublogo} alt="github logo" width={30} />
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
