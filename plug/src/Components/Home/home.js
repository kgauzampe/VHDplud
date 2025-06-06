import React, { useState } from 'react';
import Navbar from "../Navigation/Navigation/Nav";
import Niso from '../../assets/img/Niso.jpeg'
import Makza from '../../assets/img/Makza.jpeg'
import Njabs from '../../assets/img/Njabs.jpeg'
import ImageSlider from '../slider/slider';
import SocialLinks from '../SocialLinks/socialLinks';
import Footer from '../Footer/footer';
import "./home.css"

const Home = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        setStatus(result.message);
      } catch (error) {
        setStatus('Error sending message');
      }
    };
  


    return(
        <div className="container">
            <Navbar/>

            <div className="Home">
                <div>
                <h1 className="main-heading">Vryheid Plug Podcast</h1>
                </div>
                <div>
                <h4 className="sub-heading">Your Stories, your voice</h4>
                </div>
                
            </div>
            <div className="About">
                <h2 >
                    About The Plug
                </h2>
                <h6 className="about-txt">
                    Welcome to Vryheid Plug Podcast — the voice of our vibrant community! Our mission is to connect,
                    inspire, and inform the people of Vryheid through engaging podcasts and spontaneous street
                    conversations. Join us as we share local news, hustles, businesses, upcoming events, heartwarming
                    stories, and motivational insights that celebrate the spirit of our community.
                </h6>
            </div>
            <div className="Team">
            <h2 >
                    Meet The Pluggers
                </h2>

                <div className="image-container">
                    <div className="image-item">
                        <img src={Niso} alt="Niso" className="Niso" />
                        <h2 className="title">Sboniso Mntungwa</h2>
                        <p className="name">Your Host</p>
                    </div>
                    <div className="image-item">
                        <img src={Makza} alt="Makza" className="Makza" />
                        <h2 className="title">Makabongwe 'Makz' Mbuli.</h2>
                        <p className="name">Technical Director</p>
                    </div>

                    <div className="image-item">
                        <img src={Njabs} alt="Niso" className="Niso" />
                        <h2 className="title">Nonjabulo Nkosi</h2>
                        <p className="name">Your Host</p>
                    </div>

                
                    </div>




            </div>
                <div className="p-4">
                <h2>
                    Moments
                </h2>
                    <ImageSlider />
                </div>
            <div className="Contact">
            <h2 >
                    Reach Out
                </h2>
            <div className="contact-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
                    <button type="submit">Send</button>
                </form>
                {status && <p>{status}</p>}
            </div>
            <div>
                <SocialLinks />
            </div>
            </div>
            <Footer/>
           
        </div>

    )

}

export default Home;