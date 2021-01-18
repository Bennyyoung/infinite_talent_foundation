import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import light_bulb from '../images/light_bulb.jpg'
import red_woman from "../images/red_woman.jpg"
import architectural_design from "../images/architectural_design.jpeg"
import ancient_bicycle from "../images/ancient_bicycle.jpg"
import M from "materialize-css"

const HomeParallax = () => {
    useEffect(() => {
        let elements = document.querySelector(".parallax");
        M.Parallax.init(elements)
    }, [])

    return (
        <div>
            <div id="index-banner" class="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <br /><br />
                        <h1 className="header center teal-text text-lighten-2">Infinite Talents Foundation</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Seeking Talents From Local Government Areas</h5>
                        </div>
                        <div className="row center">
                            <Link to="/contact" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</Link>
                        </div>
                        <br /><br />
    
                    </div>
                </div>
                <div className="parallax"><img src={light_bulb} alt="Unsplashed background img 1" /></div>
            </div>
    
    
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">Our Objective</h5>
    
                                <p className="light">To inspire and motivate creativity, entrepreneurship and leadership among youths and young adults.
                                </p>
                            </div>
                        </div>
    
                        <div className="col s12 m6">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">Our Vision</h5>
    
                                <p className="light">To create a dependable platform that will inspire innovation and creativity as well as to promote entrepreneurship, poverty alleviation, job creation and integration through events, Workshops, Trainings, Conferences and any other relevant medium.</p>
                            </div>
                        </div>
    
                        
                    </div>
    
                </div>
            </div>
    
    
            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">Create</h5>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src={red_woman} alt="Unsplashed background img 2" /></div>
            </div>
    
            <div className="container">
                <div className="section">
    
                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>WHAT IS INFINITE TALENTS CHALLENGE</h4>
                            <p className="left-align light">Youths and young adults in our communities are invited to create inventions that will help solve problems in their homes, schools or communities using local resources. Infinite Talents Challenge seeks to foster critical 21st century skills and attitudes, like creativity and innovation, optimism and empathy, and the willingness to experiment and take risks.</p>
                        </div>
                    </div>
    
                </div>
            </div>
    
    
            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">Imagine</h5>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src={architectural_design} alt="Unsplashed background img 3" /></div>
            </div>
    
    
            <div className="container">
                <div className="section">
    
                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>FIVE COMPONENTS OF THE CREATIVE JOURNEY</h4>
                        </div>
    
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">lightbulb_outline</i></h2>
                                <h5 className="center">IMAGINATION</h5>
    
                                <p className="light">You start with imagination, think of new possibilities and explore wild ideas – the sky is the limit. This is a time and place to embrace various ideas and approach things with conviction and an attitude of optimism.</p>
                            </div>
                        </div>
    
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">IDEAS & DRIVE </h5>
    
                                <p className="light">We all have various ideas through our imagination and an innate, biologically determined urge to attain a goal or satisfy a need. So as a creator/inventor you have to believe that there is a solution to your problem or your need and that you are going to find it.</p>
                            </div>
                        </div>
    
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">INSPIRATION</h5>
    
                                <p className="light">With your imagination and ideas intact, you will be inspired to take action, to start looking for ways to build your ideas. It’s the spark that moves us to explore and act, to find out more, to create something</p>
                            </div>
                        </div>
    
                    </div>
    
                    <div className="row">
                        <div className="col s12 center">
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">build</i></h2>
                                    <h5 className="center">BUILD</h5>
    
                                    <p className="light">Time to make your idea real. Here you use the necessary resources to achieve your goal. If you are an artist, here is when you bring your emotions and feelings into play to display your artistry.</p>
                                </div>
                            </div>
    
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">share</i></h2>
                                    <h5 className="center">SHARE</h5>
    
                                    <p className="light">Share what you have made in a meaningful public context. Tell your story. Let your work affect and inspire others</p>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">Be creative</h5>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src={ancient_bicycle} alt="Unsplashed background img 3" /></div>
            </div>
    
            <div className="container">
                <div className="section">
    
                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>CEO’s STATEMENT</h4>
                            <p className="left-align light">Creating the world we want requires talent and the good news is that we all have talent, so together we can create the world we want. Whenever I think of this notion, the evergreen words of Paulo Coelho echoes in my heart, “Talent is a universal gift, but it takes a lot of courage to use it. Don’t be afraid to be the best.” After my encounter with a little girl in my local community, this saying was lodged solidly in my heart.
                            The idea of co-creating with people living in our rural communities occurred to me about twenty years ago, when I travelled to my country Nigeria and proceeded to visit my local community, Abalama in ASALGA, Rivers State. I always felt a sense of belonging to this place and being a festive season, the atmosphere was filled with warm and heartfelt vibes.
                            Just about noon day I saw a very pretty girl of about four years old. She was dark in complexion, bright eyes with short hair. It appeared she had just had her bath because whatever body moisturiser she had used, she applied it generously. Her face shone brightly as the sun beamed off her somewhat unevenly moisturised face. As I looked at her, she turned and gave me the most beautiful smile I had seen in a long while, the memory of which still lingers in my heart even up until now. She only had her pants on but the texture of her skin was so beautiful that for a moment I said to myself, “if only I knew what this child’s mother used as a moisturising cream I would get it”. Then a second thought flashed in my head which was more of a resolve, that “how can we create a better world for ourselves within this rural community using local resources”.
                            Five years later when I visited Abalama, I felt that joyous atmosphere was not there anymore. One other thing that struck me was that I found so many youths hanging around most of the time. So I asked my aunty why they were not in school or at work. Her short answer was “where is the work for them to go to”.
                            Twenty years on from my encounter with this pretty little girl, I decided to take a break from my career of running multiple restaurants and I had time to reflect, as well as decide on my next career move. The thought that predominated my mind was my encounter with that little girl and how we can create a better world for ourselves no matter where we are.
                            These deep seated beliefs in me, that everyone has talent and that together we can create the world we want has been the driving force behind the creation of Infinite Talents Foundation (ITF). ITF was borne of a desire to improve the livelihood of youths and young adults living in rural communities. This we intend to do by focussing on our strategy as detailed in “our strategy” section.
                            As we proceed, we are determined to be a dependable Foundation with the aim to model and shape the mindset of our youths and young adults, so that they can achieve beyond their wildest dreams if they apply their talents and resilience.
                            It is with great pleasure that I encourage you to not only give us an opportunity, also to collaborate with us and add value to the lives of our youths and young adults by creating a platform for them to display their creative and innovative flair. – Wari Ellis-Dokubo.
    </p>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    )
}

export default HomeParallax