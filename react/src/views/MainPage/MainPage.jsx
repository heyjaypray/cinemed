import React, { Component } from 'react';
import HeaderCinemed from './sections/header.jsx'
import Navbar from './sections/navbar.jsx';
import Contact from './sections/contact'
import Features from './sections/features'
import SectionTeams from './sections/team'
// import ParallaxPage from './sections/parallax'
// import ParallaxComponent from 'react-parallax-component';
// import { Parallax, Background } from 'react-parallax';
import { Parallax } from 'react-scroll-parallax';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <HeaderCinemed />

                <Parallax
                    className="custom-class"
                    offsetYMax={20}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <Features />
                </Parallax>
                <Contact />
            </div>
        );
    }
}

export default MainPage;