import React, { useState } from 'react';
import '../styles/ProjectsCarousel.css';

// Dados de projetos com 9 imagens diferentes cada
const projects = [
  {
    title: 'O Sullivan Street, Rose Bay',
    images: [
      'gallery1.png', 'gallery2.png', 'gallery3.png',
      'gallery4.png', 'gallery5.png', 'gallery6.png',
      'gallery7.png', 'gallery8.png', 'gallery9.png',
    ],
  },
  {
    title: 'Another Project, Example Name',
    images: [
      'gallery1.png', 'gallery2.png', 'gallery3.png',
      'gallery4.png', 'gallery5.png', 'gallery6.png',
      'gallery7.png', 'gallery8.png', 'gallery9.png',
    ],
  },
];

const ProjectsCarousel = () => {
  const [positions, setPositions] = useState(Array(projects.length).fill(0));
  const itemsPerPage = 3;

  const handleNext = (projIdx) => {
    const max = projects[projIdx].images.length - itemsPerPage;
    setPositions((prev) =>
      prev.map((pos, i) => (i === projIdx ? Math.min(pos + itemsPerPage, max) : pos))
    );
  };

  const handlePrev = (projIdx) => {
    setPositions((prev) =>
      prev.map((pos, i) => (i === projIdx ? Math.max(pos - itemsPerPage, 0) : pos))
    );
  };

  return (
    <section className="projects-carousel">
      <div className="section-header">
        <h2>Our <br /> projects</h2>
        <div className="underline" />
      </div>

      {projects.map((project, projIdx) => {
        const start = positions[projIdx];
        const visibleImages = project.images.slice(start, start + itemsPerPage);

        return (
          <div className="project-block" key={projIdx}>
            <h3>{project.title}</h3>

            <div className="carousel-wrapper">
              <button className="arrow left" onClick={() => handlePrev(projIdx)}>&lt;</button>
              <div className="images-container">
                {visibleImages.map((img, i) => (
                  <div className="image-box" key={i}>
                    <img src={require(`../assets/${img}`)} alt="" />
                  </div>
                ))}
              </div>
              <button className="arrow right" onClick={() => handleNext(projIdx)}>&gt;</button>
            </div>
          </div>
        );
      })}

      <a href="#final-quote" className="cta-projects">
        Request a Free Quote
      </a>
    </section>
  );
};

export default ProjectsCarousel;


