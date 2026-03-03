import React from 'react'
import "./error.css";
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className='errorbag'>
            <div className="errorcontents">
                <div className="error">
                    <h1 className="msg1">Oops! You've entered a broken link.</h1>
                    <p className="msg2">Don't worry about it, you  entered a page that dosen't exist. Good news is you can return to the home page and find what your looking for there!</p>
                    <button type="button">
                        <Link to={"/"} id='homepage'>Home Page</Link></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Error