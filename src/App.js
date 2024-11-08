import React, { useState } from 'react';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import custom CSS for effects and styles

function App() {
    const [activeSection, setActiveSection] = useState('');

    const openSection = (section) => {
        if (activeSection === section) {
            setActiveSection(''); // Close section if it's already open
        } else {
            setActiveSection(section); // Open the new section
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="text-center mt-5 mb-4 animate__animated animate__fadeInUp">Welcome to My Portfolio</h1>

            {/* Navigation menu */}
            <div className="d-flex justify-content-center mt-4 mb-5">
                <button
                    onClick={() => openSection('resume')}
                    className={`btn btn-primary m-2 ${activeSection === 'resume' ? 'active' : ''} btn-hover`}>
                    Resume
                </button>
                <button
                    onClick={() => openSection('about')}
                    className={`btn btn-secondary m-2 ${activeSection === 'about' ? 'active' : ''} btn-hover`}>
                    About Me
                </button>
                <button
                    onClick={() => openSection('projects')}
                    className={`btn btn-success m-2 ${activeSection === 'projects' ? 'active' : ''} btn-hover`}>
                    Projects
                </button>
                <button
                    onClick={() => openSection('contact')}
                    className={`btn btn-info m-2 ${activeSection === 'contact' ? 'active' : ''} btn-hover`}>
                    Contact
                </button>
            </div>

            {/* Conditionally render the active section */}
            <div className={`section-content ${activeSection === 'resume' ? 'show' : ''} animate__animated animate__fadeIn`}>
                {activeSection === 'resume' && <Resume />}
            </div>
            <div className={`section-content ${activeSection === 'about' ? 'show' : ''} animate__animated animate__fadeIn`}>
                {activeSection === 'about' && <About />}
            </div>
            <div className={`section-content ${activeSection === 'projects' ? 'show' : ''} animate__animated animate__fadeIn`}>
                {activeSection === 'projects' && <Projects />}
            </div>
            <div className={`section-content ${activeSection === 'contact' ? 'show' : ''} animate__animated animate__fadeIn`}>
                {activeSection === 'contact' && <Contact />}
            </div>
        </div>
    );
}

export default App;
