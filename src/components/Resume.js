// src/components/Resume.js
import React from 'react';

function Resume() {
    return (
        <section id="resume">
            <h2>Aditya Chauhan</h2>
            <p><strong>B.Tech. - Computer Science & Engineering</strong></p>

            <h3>Contact Information</h3>
            <ul>
                <li><strong>Email:</strong> 1000016383@dit.edu.in | Ady2212a@Gmail.com</li>
                <li><strong>Phone:</strong> +91-8864847657, +91-8077192249</li>
                <li><strong>Address:</strong> Bhaniyawala, Doiwala, Dehradun, Uttarakhand, India - 248140</li>
                <li><strong>Date of Birth:</strong> 01 Jan 2003</li>
                <li><strong>Gender:</strong> Male</li>
                <li><strong>Marital Status:</strong> Single</li>
                <li><strong>Languages Known:</strong> Hindi, English</li>
            </ul>

            <h3>Education</h3>
            <ul>
                <li><strong>2021 - 2025:</strong> DIT University, Dehradun - B.Tech. Computer Science & Engineering | CGPA: 7.45 / 10</li>
                <li><strong>2021:</strong> MLZS, Dehradun - 12th | CBSE | Percentage: 67.50%</li>
                <li><strong>2019:</strong> MLZS, Dehradun - 10th | CBSE | Percentage: 78.80%</li>
            </ul>

            <h3>Projects</h3>
            <ul>
                <li>
                    <strong>Portfolio Website</strong>
                    <span>01 Jun 2024 - 30 Jun 2024</span><br />
                    <strong>Key Skills:</strong> HTML, CSS, JavaScript, React, Git<br />
                    Developed a personal portfolio website to showcase web development and design projects, using React for dynamic and responsive user experience.
                </li>
                <li>
                    <strong>Snake Game using Java Swing</strong>
                    <span>01 Jan 2024 - 16 Jan 2024</span><br />
                    <strong>Key Skills:</strong> Java, Swing, AWT, OOP principles<br />
                    Created a classic Snake game using Java and Swing, featuring smooth movement, real-time input handling, collision detection, and a scoring system.
                </li>
            </ul>
        </section>
    );
}

export default Resume;
