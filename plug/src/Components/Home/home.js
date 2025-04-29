import React from "react";
import Navbar from "../Navigation/Navigation/Nav";
import Niso from '../../assets/img/Niso.jpeg'
import Makza from '../../assets/img/Makza.jpeg'
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
                <h1 className="abtHead">
                    About The Plug
                </h1>
                <h6 className="about-txt">
                    Welcome to Vryheid Plug Podcast, the voice of our vibrant community!
                    Our mission is to connect,inspire, and inform the people of Vryheid through
                    engaging podcasts and spontaneous street conversations. Join us as we share local news, hustles, businesses
                    upcoming events, heartwarming stories and moticational insights that celebrate the soirit of our comunity
                </h6>
            </div>
            <div className="Team">
            <h1 className="abtHead">
                    Meet The Plugs
                </h1>

                <div className="image-container">
  <div className="image-item">
    <img src={Niso} alt="Niso" className="Niso" />
    <h2 className="title">Sboniso Mntungwa</h2>
    <p className="name">Your Host</p>
  </div>

  <div className="image-item">
    <img src={Makza} alt="Makza" className="Makza" />
    <h2 className="title">Makabongwe 'Maks' Mbuli.</h2>
    <p className="name">Technical Director</p>
  </div>
</div>




            </div>
           
        </div>

    )

}

export default Home;