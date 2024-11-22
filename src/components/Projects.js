import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Gambar proyek
import projectImage1 from '../assets/images/foto1.png';
import projectImage2 from '../assets/images/foto2.png';
import projectImage3 from '../assets/images/foto3.png';
import projectImage4 from '../assets/images/foto4.png';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Game Antivirus Adventure.",
      image: projectImage1,
      link: "#",
    },
    {
      title: "Project 2",
      description: "Website UMKM Menggunakan Figma.",
      image: projectImage2,
      link: "#",
    },
    {
      title: "Project 3",
      description: "Rekam Medis.",
      image: projectImage3,
      link: "#",
    },
    {
      title: "Project 4",
      description: "Todo List With CRUD.",
      image: projectImage4,
      link: "#",
    },
  ];

  return (
    <Container className="mt-5 projects-section">
      <h2 className="text-center mb-4 display-3">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="project-card shadow-lg hover-scale">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                className="card-image rounded"
              />
              <Card.Body>
                <Card.Title className="text-uppercase text-center">{project.title}</Card.Title>
                <Card.Text className="text-muted">{project.description}</Card.Text>
                <div className="text-center">
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                  >
                    View Project
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
