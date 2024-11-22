import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="form-container">
          <h2 className="text-center mb-4" style={{ color: '#6c757d' }}>Find Me On</h2>
          <p className="text-center mb-4" style={{ color: '#6c757d' }}>
            Feel free to connect with me on any of the platforms below:
          </p>
          <Row className="justify-content-center">
            <Col xs="auto">
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <FaInstagram size={40} />
              </a>
            </Col>
            <Col xs="auto">
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <FaLinkedin size={40} />
              </a>
            </Col>
            <Col xs="auto">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link github">
                <FaGithub size={40} />
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
