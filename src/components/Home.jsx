import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillYoutube, AiFillInstagram, AiFillAmazonCircle} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
      <img src={vg} alt="Graphics" />

      <div>
        <p>We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children</p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nihil hic consequatur provident natus tempore. Aspernatur nam deserunt iusto numquam maiores porro non sit ea cumque officiis doloremque ipsam expedita error autem obcaecati alias praesentium nisi, incidunt ipsum atque quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem perferendis natus reiciendis. Earum tenetur alias dicta, quisquam debitis illum.</p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>

        <h1>Brands</h1>
        <article>
          <div style={{animationDelay: "0.3s"}}>
              <AiFillGoogleCircle />
              <p>Google</p>
          </div>

          <div style={{animationDelay: "0.5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
          </div>

          <div style={{animationDelay: "0.7s"}}>
              <AiFillYoutube />
              <p>YouTube</p>
          </div>

          <div style={{animationDelay: "1s"}}>
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