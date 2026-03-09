import React from "react";
import "./footer.css";
// import { Link } from "react-router-dom";
import Logo2 from '../../Images/debela@4x.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footersections">
                <div className="footersection1">
                    <img className="footerlogo" src={Logo2} alt="LOGO" />
                    {/* <div className="footermsg">"As high as the sky."</div> */}
                </div>
                <div className="footersection">
                    <ul>
                        <li className="footertitle">Company</li>
                        {/* <li className="footerrows">
                            <div id="footerrows">
                                Blog</div>
                        </li> */}
                        <li className="footerrows">
                            <div id="footerrows">
                                Privacy</div>
                        </li>
                        <li className="footerrows">
                            <div id="footerrows">
                                Terms</div>
                        </li>
                    </ul>
                </div>
                {/* <div className="footersection">
                    <ul>
                        <li className="footertitle">Product</li>
                        <li className="footerrows">
                            <div id="footerrows">
                                Product</div>
                        </li>
                        <li className="footerrows">
                            <div id="footerrows">
                                Product2</div>
                        </li>
                        <li className="footerrows">
                            <div id="footerrows">
                                Product3</div>
                        </li>
                    </ul>
                </div> */}
                <div className="footersection">
                    <ul>
                        <li className="footertitle">Contacts</li>
                        {/* <li className="footerrows">
                            <div className="footerrowsicons mail"> <EmailIcon /></div>
                            <a id="footerrows" href="mailto:support@dabelafoundation.org">
                                support@dabelafoundation.org</a>
                        </li> */}
                        <li className="footerrows">
                            <div className="footerrowsicons mail"> <EmailIcon /></div>
                            <a id="footerrows" href="mailto:dabelamotherandchildrenfoundation@gmail.com">
                                motherandchildren@gmail.com
                            </a>
                        </li>
                        <li className="footerrows">
                            <div className="footerrowsicons phone"> <PhoneIcon /></div>
                            <a id="footerrows" href="tel:+234-222-864-754">
                                +234-222-864-754</a>
                        </li>
                    </ul>
                </div>
                <div className="footersection">
                    <ul>
                        <li className="footertitle">Socials</li>
                        {/* <li className="footerrows">
                            <div className="footerrowsicons x">
                                <XIcon />
                            </div>
                            <div id="footerrows">
                                X</div>
                        </li> */}
                        <li className="footerrows">
                            <div className="footerrowsicons instagram"> <InstagramIcon /></div>
                            <div id="footerrows">
                                Instagram</div>
                        </li>
                        <li className="footerrows">
                            <div className="footerrowsicons facebook">
                                <FacebookIcon />
                            </div>
                            <div id="footerrows">
                                Facebook</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="credit">
                <p>&copy; Dabela Mother and Children Foundation LTD. {new Date().getFullYear()} | All Rights Reserved</p>
            </div>
        </div>
    )
};

export default Footer;
