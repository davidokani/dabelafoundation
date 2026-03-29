import React, { useState } from "react"; import "./main.css";
import Footer from "../Footer/Footer";
import HeroImage from "../../Images/home1.jpg";
import Logo2 from '../../Images/debela@4x.png'
import ProfileIcon from '../../Images/profileicon.jpg'

function Main() {
    const [showDonateModal, setShowDonateModal] = useState(false);
    const handleWhatsApp = (message) => {
        const phoneNumber = "2348072065768";
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
    };

    return (
        <div className="home">
            {/* TOP LOGO BAR */}
            <div className="top-logo">
                <img src={Logo2} alt="Dabela Mother and Child Foundation" />
            </div>

            {/* HERO */}
            <section className="hero">
                <div className="hero-text">
                    <h1>
                        Empowering Mothers. Nurturing Children. Transforming Futures.
                    </h1>
                    <p>
                        We are committed to providing awareness, mentorship, education, economic empowerment, advocacy and community support programs to vulnerable mothers and children. Creating sustainable futures for families and communities.
                    </p>
                    <div className="hero-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => setShowDonateModal(true)}
                        >
                            Donate Now
                        </button>
                        <button
                            className="btn-outline"
                            onClick={() =>
                                handleWhatsApp(`Hello, I’m interested in volunteering with Dabela Mother & Child Foundation.\n\n My name is [Your Name], and I would love to support your work in empowering single mothers and nurturing children. Please let me know the available opportunities and how I can get involved.`)
                            }
                        >
                            Become a Volunteer</button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={HeroImage} alt="Mother and child smiling" />
                </div>
            </section>

            {/* ABOUT */}
            <section className="section about">
                <div className="container">
                    <h2>Who We Are</h2>
                    <p>
                        Dabela Mother and Child Foundation is a nonprofit organization committed to supporting single mothers and nurturing children growing up in a single parent household.
                    </p>
                    <p>
                        We focus on emotional healing, access to care, education, and economic empowerment to help families rebuild stability and hope. Our work is driven by the belief that when mothers are supported and children are protected, entire communities become stronger.
                    </p>
                </div>
            </section>

            {/* APPROACH */}
            <section className="section approach">
                <div className="container">
                    <h2>Our Approach</h2>
                    <p className="section-sub">
                        Sustainable change requires more than charity — it requires strategy.
                    </p>

                    <div className="approach-steps">
                        <div className="step">
                            <span>01</span>
                            <h3>Identify</h3>
                            <p>We work with communities to identify mothers and thier children facing emotional, economic, and social vulnerability.</p>
                        </div>

                        <div className="step">
                            <span>02</span>
                            <h3>Intervene</h3>
                            <p>Through healthcare support, counseling resources, mentorship, and education initiatives, we provide immediate and practical help.</p>
                        </div>

                        <div className="step">
                            <span>03</span>
                            <h3>Empower</h3>
                            <p>We equip mothers with skills, resources, and opportunities that help them build stable and independent lives.</p>
                        </div>

                        <div className="step">
                            <span>04</span>
                            <h3>Transform</h3>
                            <p>Our long-term goal is see single mothers and thier children doing better.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHERE WE WORK */}
            <section className="section light">
                <div className="container two-col">
                    <div>
                        <h2>Where We Work</h2>
                        <p>
                            We currently operate in Nigeria, working with underserved communities where mothers and their children face economic hardship, emotional trauma, and limited access to resources.
                        </p>
                        <p>
                            Through partnerships with volunteers, educators, healthcare professionals, and community leaders, we aim to create meaningful and lasting impact.
                        </p>
                    </div>

                    <div className="map-box">
                        <h3>3 Communities Reached</h3>
                        <p>Expanding every year through partnerships and volunteer networks.</p>
                    </div>
                </div>
            </section>

            {/* WHY IT MATTERS */}
            <section className="impact-emotion">
                <div className="container">
                    <h2>Why This Work Matters</h2>

                    <div className="emotion-grid">
                        <div>
                            <h3>Broken Homes Affect Millions</h3>
                            <p>Many children grow up without emotional stability, guidance, or support systems.</p>
                        </div>

                        <div>
                            <h3>Mothers Face Heavy Burdens</h3>
                            <p>Many single mothers struggle to provide stability and opportunity while raising children alone.</p>
                        </div>

                        <div>
                            <h3>One Intervention Matters</h3>
                            <p>With the right support, a mother can rebuild her life and a child can change their future.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE NEED */}
            <section className="section light">
                <div className="container two-col">
                    <div>
                        <h2>The Urgent Need</h2>
                        <p>
                            Millions of single mothers lack access to prenatal care and essential
                            medical services. Children from single parent-homes, in underserved communities face
                            malnutrition, limited educational access, and unsafe living
                            conditions.
                        </p>
                        <p>
                            Without intervention, these challenges continue across generations.
                            Our mission is to break that cycle permanently.
                        </p>
                    </div>

                    <div className="stats-box">
                        <div>
                            <h3>10+</h3>
                            <span>Families Supported</span>
                        </div>
                        <div>
                            <h3>3</h3>
                            <span>Communities Reached</span>
                        </div>
                        <div>
                            <h3>5+</h3>
                            <span>Active Volunteers</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROGRAMS */}
            <section className="section">
                <div className="container">
                    <h2>Our Core Programs</h2>

                    <div className="grid">
                        <div className="card">
                            <h3>Maternal Healthcare</h3>
                            <p>
                                Medical outreach programs and health support initiatives that connect underserved women and children with essential healthcare services, screenings, and wellness resources.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Child Education</h3>
                            <p>
                                School sponsorships, mentorship programs, and access to learning materials for children in need.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Feeding</h3>
                            <p>
                                Community feeding initiatives that provide meals and essential food support for mothers and children, helping ensure that no child has to learn or grow on an empty stomach.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Economic Empowerment</h3>
                            <p>
                                Skills training and micro-support programs enabling mothers to build independent livelihoods.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Emotional Support & Mentorship</h3>
                            <p>
                                Support groups, mentorship programs, and emotional healing resources for mothers and children navigating difficult family circumstances.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* STORIES */}
            <section className="section light">
                <div className="container">
                    <h2>Stories of Hope</h2>
                    <div className="testimonial">
                        <p>
                            “Our mission is to restore dignity, strengthen families, and ensure that no child grows up without hope.”
                        </p>
                        <span>— Dabela Mother and Child Foundation</span>
                    </div>
                </div>
            </section>

            {/* INVOLVEMENT */}
            <section className="section">
                <div className="container">
                    <h2>How You Can Get Involved</h2>
                    <div className="grid">
                        <div className="card centered">
                            <h3>Donate</h3>
                            <p>Help us provide life-changing support to mothers and children in vulnerable communities.</p>
                        </div>

                        <div className="card centered">
                            <h3>Volunteer</h3>
                            <p>Join our network of volunteers working to strengthen families and uplift communities.</p>
                        </div>

                        <div className="card centered">
                            <h3>Partner With Us</h3>
                            <p>Organizations, professionals, and community leaders can collaborate with us to expand impact.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOUNDERS */}
            <section className="section founders">
                <div className="container">
                    <h2>Our Founders</h2>
                    <p className="section-sub">
                        Dabela Mother and Child Foundation was inspired by lived experiences and a deep understanding of the challenges many single mothers and their children face in unstable family environments. With a vision to create programs that empower women, restore dignity, and ensure that children have the support they need to build better futures.
                    </p>

                    <div className="founders-grid">

                        {/* Founder 1 */}
                        <div className="founder-card">

                            <div className="founder-image">
                                <img src={ProfileIcon} alt="Founder Name" />
                            </div>

                            <div className="founder-info">
                                <h3>Ladi Akubo</h3>
                                <span className="founder-role">Co-Founder</span>

                                <p>
                                    Committed to supporting mothers and protecting children by creating programs that strengthen families, restore dignity, and open pathways to better futures.
                                </p>
                            </div>
                        </div>


                        {/* Founder 2 */}
                        <div className="founder-card">

                            <div className="founder-image">
                                <img src={ProfileIcon} alt="Founder Name" />
                            </div>

                            <div className="founder-info">
                                <h3>Blessing Ojochide</h3>
                                <span className="founder-role">Co-Founder</span>

                                <p>
                                    Believes that when mothers receive the support they need and children grow up in environments filled with guidance, care, and opportunity, entire communities can be transformed.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="cta">
                <h2>Together, We Can Transform Generations</h2>
                <button
                    className="btn-primary large"
                    onClick={() =>
                        handleWhatsApp(`Hello, I’m interested in partnering with Dabela Foundation.\n\n My name is [Your Name/Organization], and I would like to explore ways we can collaborate to support single mothers and children. Please share more details on partnership opportunities.`)
                    }>Partner With Us</button>
            </section>
            {showDonateModal && (
                <div className="donate-modal">
                    <div className="donate-content">
                        <h2>Support Our Mission</h2>
                        <p className="donate-sub">
                            Make a direct bank transfer using the details below
                        </p>

                        <div className="bank-card">

                            <div className="bank-header">
                                <span className="bank-name">Zenith Bank</span>
                                <span className="badge">Bank Transfer</span>
                            </div>

                            <div className="bank-body">
                                <div className="bank-row">
                                    <span>Account Name</span>
                                    <strong>Dabela Mother and Child Foundation</strong>
                                </div>

                                <div className="bank-row highlight">
                                    <span>Account Number</span>
                                    <strong>1310987906</strong>
                                </div>
                            </div>

                            <button
                                className="copy-btn"
                                onClick={() => {
                                    navigator.clipboard.writeText("1310987906");
                                    alert("Account number copied!");
                                }}
                            >
                                Copy Account Number
                            </button>
                        </div>

                        <button
                            className="btn-outline close-btn"
                            onClick={() => setShowDonateModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Main;