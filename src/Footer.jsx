import React from "react";
import "./css/Footer.css";
import InstaIcon from './assets/insta.svg';
import EmailIcon from './assets/email.svg';
import PhoneIcon from './assets/phone.svg';
import logo from './assets/Logo.svg'

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo-div">
                    <img src={logo} className="footer-logo" />
                </div>
                <div className="footer-col1">
                    <ul>
                        <li className="col-title" >The Brand</li>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About Us</li>
                        <li>FAQ's</li>
                    </ul>
                </div>
                <div className="footer-col2">
                    <ul>
                        <li className="col-title" >Legal</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-col3">
                        <div className="footer-col3-section">
                            <div className="footer-col3-icon-div">
                                <img src={EmailIcon} className="footer-col3-icon" />
                            </div>
                            <div className="footer-col3-info">
                                <div className="footer-col3-info-title">Email</div>
                                <div className="footer-col3-subinfo">fuzzieplushie@gmail.com</div>
                            </div>
                        </div>

                        <div className="footer-col3-section">
                            <div className="footer-col3-icon-div">
                                <img src={PhoneIcon} className="footer-col3-icon" alt="logo" />
                            </div>
                            <div className="footer-col3-info">
                                <div className="footer-col3-info-title">Phone</div>
                                <div className="footer-col3-subinfo">+961 78 874 095</div>
                            </div>
                        </div>

                        <div className="footer-col3-section">
                            <div className="footer-col3-icon-div">
                                <img src={InstaIcon} className="footer-col3-icon" />
                            </div>
                            <div className="footer-col3-info">
                                <div className="footer-col3-info-title">Instagram</div>
                                <div className="footer-col3-subinfo">fuzzie_plushie</div>
                            </div>
                            </div>
                    </div>
                </div>
            <div className="footer-bottom"></div>
        </div>
        </>
    )
}

export default Footer