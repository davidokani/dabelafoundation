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
                        Building Strong Mothers. Raising Stronger Children.
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
                        We are a non-profit foundation dedicated to strengthening families
                        through maternal health support, child education initiatives,
                        nutrition programs, and economic empowerment for mothers.
                    </p>
                    <p>
                        Since our founding, we have partnered with local communities,
                        volunteers, medical professionals, and educators to ensure that
                        every mother has access to care and every child has the opportunity
                        to thrive.
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
                            <p>We work directly with communities to identify urgent maternal and child needs.</p>
                        </div>

                        <div className="step">
                            <span>02</span>
                            <h3>Intervene</h3>
                            <p>Through healthcare, nutrition, and education programs, we deliver targeted solutions.</p>
                        </div>

                        <div className="step">
                            <span>03</span>
                            <h3>Empower</h3>
                            <p>We equip mothers with skills and resources to sustain long-term independence.</p>
                        </div>

                        <div className="step">
                            <span>04</span>
                            <h3>Transform</h3>
                            <p>Generational cycles of poverty and vulnerability are permanently broken.</p>
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
                            We operate in rural and underserved communities where access to
                            maternal healthcare and child education remains critically limited.
                        </p>
                        <p>
                            By partnering with local leaders and professionals, we ensure
                            culturally aligned and community-driven impact.
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
                            <h3>Every 2 Minutes</h3>
                            <p>A preventable pregnancy-related complication threatens a mother’s life.</p>
                        </div>

                        <div>
                            <h3>Millions of Children</h3>
                            <p>Grow up without access to safe nutrition or consistent education.</p>
                        </div>

                        <div>
                            <h3>One Intervention</h3>
                            <p>Can change the trajectory of an entire family for generations.</p>
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
                                Free prenatal checkups, maternal education workshops,
                                and medical outreach services for underserved women.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Child Education</h3>
                            <p>
                                School sponsorships, mentorship programs, and
                                access to learning materials for children in need.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Nutrition & Feeding</h3>
                            <p>
                                Community feeding initiatives and sustainable
                                nutrition programs for mothers and children.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Economic Empowerment</h3>
                            <p>
                                Skills training and micro-support programs
                                enabling mothers to build independent livelihoods.
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
                            “Before finding this foundation, I had no access to proper
                            healthcare during pregnancy. Today, my child is healthy,
                            and I run a small tailoring business through their support.”
                        </p>
                        <span>— Beneficiary Mother</span>
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
                            <p>Your contribution directly funds life-saving programs.</p>
                        </div>

                        <div className="card centered">
                            <h3>Volunteer</h3>
                            <p>Support outreach programs and empower communities.</p>
                        </div>

                        <div className="card centered">
                            <h3>Partner With Us</h3>
                            <p>Collaborate to expand our reach and impact.</p>
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