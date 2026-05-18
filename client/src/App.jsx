import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        // Add smooth scrolling to html
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
