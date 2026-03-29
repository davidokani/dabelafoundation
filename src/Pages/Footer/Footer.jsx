import "./footer.css";
import Logo2 from '../../Images/debela@4x.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import AddressIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footersections">

                {/* LOGO + MESSAGE */}
                <div className="footersection footersection1">
                    <img className="footerlogo" src={Logo2} alt="Dabela Foundation Logo" />
                    <p className="footermsg">
                        Empowering mothers. Protecting children. Transforming futures.
                    </p>
                </div>

                {/* CONTACT */}
                <div className="footersection">
                    <h4 className="footertitle">Address</h4>

                    <div className="footerrows">
                        <span className="footerrowsicons mail"><AddressIcon /></span>
                        <p>shop 001 ground floor, Akubo Ojoma plaza, opposite FIRS, Mohmoh Sani Junction, Old Kutunku, gwagwalada FCT-Abuja</p>
                    </div>
                </div>

                <div className="footersection">
                    <h4 className="footertitle">Contact</h4>

                    <div className="footerrows">
                        <span className="footerrowsicons mail"><EmailIcon /></span>
                        <a href="mailto:dabelamotherandchildfoundation@gmail.com">
                            dabelamotherandchildfoundation@gmail.com
                        </a>
                    </div>

                    <div className="footerrows">
                        <span className="footerrowsicons phone"><PhoneIcon /></span>
                        <a href="tel:+2348072065768">
                            +234 807 206 5768
                        </a>
                    </div>
                </div>

                {/* SOCIALS */}
                <div className="footersection">
                    <h4 className="footertitle">Connect</h4>

                    <div className="footerrows">
                        <span className="footerrowsicons instagram"><InstagramIcon /></span>
                        <a href="https://www.instagram.com/dabelafoundation" target="_blank" rel="noreferrer">
                            Instagram
                        </a>
                    </div>

                    <div className="footerrows">
                        <span className="footerrowsicons whatsapp"><WhatsAppIcon /></span>
                        <a
                            href="https://wa.me/2348072065768"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="credit">
                <p>
                    &copy; {year} Dabela Mother and Child Foundation. All Rights Reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;