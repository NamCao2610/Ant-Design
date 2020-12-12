import React from 'react'

import AppHero from '../component/common/AppHero.js'
import About from '../component/home/About';
import Features from '../component/home/Features';
import Works from '../component/home/Works';
import FAQ from '../component/home/FAQ';
import Pricing from '../component/home/Pricing';
import Contact from '../component/home/Contact';

function Home() {
    return (
        <div className="main">
            <AppHero />
            <About />
            <Features />
            <Works />
            <FAQ />
            <Pricing />
            <Contact />
        </div>
    )
}

export default Home
