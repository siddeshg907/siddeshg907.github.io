import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="project-card">
        {/* Project Image */}
        <h3 className="project-title">Project Title</h3>
        <p className="project-description">Project description...</p>
        <p className="project-tech-stack">Tech stack used...</p>
        <a className="project-github-link" href="https://github.com/your_username/project_repo" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        <a className="project-deployed-link" href="https://project_deployed_link.com" target="_blank" rel="noopener noreferrer">Deployed Link / Video Link</a>
      </div>
      {/* Add more project cards as needed */}
    </section>
  );
};

export default Projects;