import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap'; // Menggunakan ProgressBar untuk menampilkan level keterampilan
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'; // Ikon untuk keterampilan

const MySkill = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">My Skills</h2>
        <Row>
          {/* Kolom untuk React */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <FaReact size={50} className="text-primary mb-3" />
                <Card.Title>React</Card.Title>
                <ProgressBar now={80} label="80%" variant="success" className="mb-3" />
                <p className="text-muted">
                  Proficient in building modern and interactive UIs with React, leveraging hooks, context API, and component-driven development.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Kolom untuk HTML */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <FaHtml5 size={50} className="text-danger mb-3" />
                <Card.Title>HTML</Card.Title>
                <ProgressBar now={95} label="95%" variant="danger" className="mb-3" />
                <p className="text-muted">
                  Expertise in semantic HTML, accessibility, and structuring web content to ensure a responsive, user-friendly experience.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Kolom untuk CSS */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <FaCss3Alt size={50} className="text-info mb-3" />
                <Card.Title>CSS</Card.Title>
                <ProgressBar now={90} label="90%" variant="info" className="mb-3" />
                <p className="text-muted">
                  Advanced knowledge of CSS, including Flexbox, Grid, animations, and responsive design principles.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Kolom untuk JavaScript */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="shadow-sm text-center">
              <Card.Body>
                <FaJs size={50} className="text-warning mb-3" />
                <Card.Title>JavaScript</Card.Title>
                <ProgressBar now={85} label="85%" variant="warning" className="mb-3" />
                <p className="text-muted">
                  Strong proficiency in JavaScript ES6+, including async/await, promises, and modern JavaScript frameworks like React.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MySkill;
