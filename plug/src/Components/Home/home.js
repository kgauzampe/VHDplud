import React from "react";
import Navbar from "../Navigation/Navigation/Nav";
import "./home.css"

const Home = () => {
    return(
        <div className="container">
            <Navbar/>

            <div className="Home">
                <div>
                <h1 className="main-heading">Vryheid Plug Podcast</h1>
                </div>
                <div>
                <h3 className="sub-heading">Your Stories, your voice</h3>
                </div>
                
            </div>
            <div className="About">
                <h6>
                    Welcome to Vryheid Plug Podcast, the voice of our vibrant community!
                    Our mission is to connect,inspire, and inform the people of Vryheid through
                    engaging podcasts and spontaneous street conversations. Join us as we share local news, hustles, businesses
                    upcoming events, heartwarming stories and moticational insights that celebrate the soirit of our comunity
                </h6>
            </div>
           
        </div>

    )

}

export default Home;