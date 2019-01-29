import React, { Component } from 'react';
import HeaderCinemed from './sections/header.jsx'
import Navbar from './sections/navbar.jsx';
import Contact from './sections/contact'
import Features from './sections/features'
import SectionTeams from './sections/team'

class MainPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HeaderCinemed />
                <Features />
                <SectionTeams />
                <Contact />
            </div>
        );
    }
}

export default MainPage;