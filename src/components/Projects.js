import React from 'react';

const Projects = () => {
    const projectData = [
        {
            name: 'Portfolio Website',
            description: 'A personal portfolio website to showcase my web development projects.',
            githubLink: 'https://github.com/Ady2416/aditya_portfolio' / },
        {
            name: 'Snake Game',
            description: 'A classic Snake game built with Java Swing.',
            githubLink: 'https://github.com/Ady2416/snake-game' }
    ];

    return (
        <div className="projects-container">
            <h2 className="text-center mb-4">Projects</h2>
            <div className="row">
                {projectData.map((project, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">{project.description}</p>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
