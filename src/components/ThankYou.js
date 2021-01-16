import React from 'react'
import { Link } from "react-router-dom"

export default function ThankYou() {
    return (
        <>
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <br /><br />
                        <h1 className="header center teal-text text-lighten-2">Infinite Talent Foundation</h1>
                        <div className="row center">
                            <p className="header col s12 light">Thank you for your submission</p>
                            <Link to="/">Go to home</Link>
                        </div>
                        <br /><br />

                    </div>
                </div>
                <div className="parallax"><img src={bg1} alt="Unsplashed background img 1" /></div>
            </div>
        </>
    )
}
