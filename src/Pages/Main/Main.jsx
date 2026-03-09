import React from "react";
import "./main.css";
import Footer from "../Footer/Footer";
import HeroImage from "../../Images/home1.jpg";

function Main() {
    return (
        <div className="home">

            {/* HERO */}
            <section className="hero">
                <div className="hero-text">
                    <h1>
                        {/* Building Strong Mothers. Raising Stronger Children. */}
                        Empowering Mothers. Protecting Children. Transforming Futures.
                    </h1>
                    <p>
                        We are committed to providing healthcare access, education,
                        nutrition, and empowerment programs to vulnerable mothers and
                        children — creating sustainable futures for families and communities.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Donate Now</button>
                        <button className="btn-outline">Become a Volunteer</button>
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
                        Dabela Mother and Child Foundation is a nonprofit organization committed to supporting single mothers and protecting children growing up in vulnerable family environments.
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
                            <p>We work with communities to identify mothers and children facing emotional, economic, and social vulnerability.</p>
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
                            <p>Our long-term goal is to break generational cycles of hardship and create stronger futures for children and families.</p>
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
                            We currently operate in Nigeria, working with underserved communities where mothers and children face economic hardship, emotional trauma, and limited access to resources.
                        </p>
                        <p>
                            Through partnerships with volunteers, educators, healthcare professionals, and community leaders, we aim to create meaningful and lasting impact.
                        </p>
                    </div>

                    <div className="map-box">
                        <h3>120+ Communities Reached</h3>
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
                            <h3>Single Mothers Face Heavy Burdens</h3>
                            <p>Many mothers struggle to provide stability and opportunity while raising children alone.</p>
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
                            Millions of mothers lack access to prenatal care and essential
                            medical services. Children in underserved communities face
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
                            <h3>15,000+</h3>
                            <span>Families Supported</span>
                        </div>
                        <div>
                            <h3>120+</h3>
                            <span>Communities Reached</span>
                        </div>
                        <div>
                            <h3>500+</h3>
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
                        Dabela Mother and Child Foundation was inspired by lived experiences and a deep understanding of the challenges many mothers and children face in unstable family environments. With a vision to create programs that empower women, restore dignity, and ensure that children have the support they need to build better futures.
                    </p>

                    <div className="founders-grid">

                        {/* Founder 1 */}
                        <div className="founder-card">

                            {/* <div className="founder-image">
                                <img src={HeroImage} alt="Founder Name" />
                            </div> */}

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

                            {/* <div className="founder-image">
                                <img src={HeroImage} alt="Founder Name" />
                            </div> */}

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
                <button className="btn-primary large">Support Our Mission</button>
            </section>

            <Footer />
        </div>
    );
}

export default Main;