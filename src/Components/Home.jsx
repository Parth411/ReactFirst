import React from 'react'
import vg from "../assets/img2.png"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>

<main>
    <h1>TECH LAB</h1>
    <p>One Destination to your all need </p>
</main>
</div>

<div className="home_2">
    <img src={vg} alt="Graphics" />
    <div>
        <p>
        Let the software be your better half! 
        Your partner in big ideas and big growth.
         It’s time to let technology drive your business forward Allow us to
          streamline your IT needs
        </p>
    </div>
</div>

<div className="home_3" id='about'>
    <div>
        <h1>Who we are??</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt harum aspernatur impedit dicta voluptatum, excepturi deserunt nihil blanditiis culpa maxime ipsum qui officiis explicabo maiores illo, consectetur hic magni aut.</p>
    </div>
</div>

<div className="home_4" id='brands'>
    <div>
        <h1>Brands</h1>
        <article>
        <div style={{
            animationDelay: "0.3s",
        }}>
            <AiFillGoogleCircle />
            <p>Google</p>
            </div>

            <div style={{
            animationDelay: "0.5s",
        }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
            </div>

            <div style={{
            animationDelay: "0.7s",
        }}>
            <AiFillYoutube />
            <p>YouTube</p>
            </div>

            <div style={{
            animationDelay: "1s",
        }}>
            <AiFillInstagram />
            <p>Instagram</p>
            </div>
        </article>
    </div>
</div>


    </>
  )
}

export default Home