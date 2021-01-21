import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer className="page-footer teal">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Our founder</h5>
                            <p className="grey-text text-lighten-4">It all started with one woman's spirit fueled by creativity, a passion for problem and the believe that inventing is essential to social and economic progress.
In 2018, wali founded the Infinite Talent Foundation to inspire a new generation of inventors to create products to change our world for better.  </p>


                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Social Links</h5>
                            <ul>
                                <li><a href="#" className="white-text">Facebook</a></li>
                                <li><a href="#" className="white-text">Instagram</a></li>
                                <li><a href="#" className="white-text">Twitter</a></li>
                            </ul>
                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Others</h5>
                            <ul>
                                <li><Link to="/" className="white-text">HOME</Link></li>
                                <li><Link to="about-us" className="white-text">ABOUT</Link></li>
                                <li><Link to="/contact" className="white-text">CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                    </div>
                </div>
            </footer>

        </>
    )
}
