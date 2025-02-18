import React from "react";
import Navbar from './Navbar.jsx';
import ourStory from './assets/ourStory.svg'
import vector from './assets/Vector.svg'
import souritMahmoud from './assets/mahmoud-icon.svg'
import Footer from "./Footer.jsx";
import './css/AboutUs.css';


function AboutUs() {
    return (
        <>
        <div className="homepage-container">
            <div className="homepage-upper-div">
                  <img src={ourStory} className="homepage-title" />
                </div>
                
                <div className="meet-mahmoud-div">
                    <div className="meet-mahmoud-vector-div">
                        <img src={vector} className="meet-mahmoud-vector" />
                    </div>
                    <div className="meet-mahmoud-text">MEET MAHMOUD</div>
                    <div className="meet-mahmoud-vector-div">
                        <img src={vector} className="meet-mahmoud-vector" />
                    </div>
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