import React from "react";
import { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo2 from '../../Images/navbarLogo.jpg'

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        const scrollToTop = () => {
            window.scrollTo(0, 0)
        }
        return (
            <>
                <nav>
                    <div className="site-brandhold" onClick={scrollToTop}>
                        <img className="site-logo" src={Logo2} alt="LOGO" />
                        <div className="site-title">KL</div>
                    </div>
                    <div className="bar-arrowspack">
                        <ul id="navbar" className={this.state.clicked ? '#navbar active' : '#navbar'}>
                            <li>
                                <Link to={"/"} id="bar-arrows" onClick={() => { this.setState({ clicked: false }, scrollToTop) }}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/blog"} id="bar-arrows" onClick={() => { this.setState({ clicked: false }, scrollToTop) }}>Blog</Link>
                            </li>
                            <li>
                                <Link to={"/portfolio"} id="bar-arrows" onClick={() => { this.setState({ clicked: false }, scrollToTop) }}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to={"/legal"} id="bar-arrows" onClick={() => { this.setState({ clicked: false }, scrollToTop) }}>Legal</Link>
                            </li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;