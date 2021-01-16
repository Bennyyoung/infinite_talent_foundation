import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="page-footer teal">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">ABOUT OUR EVENT</h5>
                            <p className="grey-text text-lighten-4">The event is a one-day event designed to bring together youths and young adults from various communities to showcase their creative ingenuity. Groups of communities will be chosen to participate at any one time because of the number of communities we have to cover. If your community is not mentioned, please be patient with us. We intend to reach all the communities in the Local Government Areas in Nigeria so be rest assured that we will come to your community.  </p>


                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Social Links</h5>
                            <ul>
                                <li><a href="#" className="white-text">Facebook</a></li>
                                <li><a href="#" className="white-text">Instagram</a></li>
                                <li><a href="#" className="white-text">Twitter</a></li>
                            </ul>
                        </div>
                        <div class="col l3 s12">
                            <h5 class="white-text">Others</h5>
                            <ul>
                                <li><a href="#" className="white-text" to="/">HOME</a></li>
                                <li><a href="#" className="white-text" to="/about-us">ABOUT</a></li>
                                <li><a href="#" className="white-text" to="/contact">CONTACT</a></li>
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
