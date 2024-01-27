import React from "react";
import Navbar from './Navbar.jsx';
import ourStory from './assets/ourStory.svg'
import meetMahmoud from './assets/meet-mahmoud.svg'
import souritMahmoud from './assets/mahmoud-icon.svg'
import Footer from "./Footer.jsx";
import './css/AboutUs.css';


function AboutUs() {
    return (
        <>
        <Navbar />
        <div className="homepage-container">
            <div className="homepage-upper-div">
                  <img src={ourStory} className="homepage-title" />
                </div>
                
            <div className="meet-mahmoud-div">
                <img src={meetMahmoud} className="meetMahmoud" />
            </div>
            
                <div className="story-details-div">
                    <div className="story-details">
                        Mahmoud Barbir is a young Engineer who found interest in buying
                        and gifting plushies. His interest lead him to build his Fuzzie
                        Plushie world, where with his extra ordinary skills in marketing,
                        was able to reach all plushie lovers in Lebanon. Mahmoud is now
                        aiming to become the number one seller in Lebanon.
                    </div>
                    <div className="sourit-mahmoud-div">
                        <img src={souritMahmoud} className="sourit-mahmoud" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs