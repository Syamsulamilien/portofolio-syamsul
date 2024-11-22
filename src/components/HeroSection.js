import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Mengimpor gaya AOS
import { ReactTyped } from 'react-typed'; // Menggunakan ReactTyped untuk animasi teks
import myPhoto from '../assets/images/celigt.jpg'; // Import foto

const HeroSection = () => {
  // Inisialisasi AOS di dalam useEffect
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durasi animasi
      easing: 'ease-in-out', // Jenis transisi animasi
      once: true, // Animasi hanya sekali saat elemen muncul
    });
  }, []); // Array kosong berarti useEffect hanya dijalankan sekali setelah komponen pertama kali dirender

  return (
    <Container
      id="home"
      className="py-5 text-light"
      style={{
        minHeight: '100vh', // Membuat section memenuhi viewport
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Row className="align-items-center">
        {/* Bagian Teks */}
        <Col xs={12} md={6} className="text-center text-md-start" data-aos="fade-right">
          <h2 className="display-3" style={{ color: '#000' }}>Welcome to My Portofolio</h2>
          <p className="lead">
            <ReactTyped
              className="fs-2 text-primary"
              strings={[
                "I have no father.",
                "I have a very good grandfather.",
                "I have a very tough and independent mother",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </p>
        </Col>

        {/* Bagian Gambar */}
        <Col xs={12} md={6} className="text-center" data-aos="fade-left">
          <div style={{ position: 'relative', paddingLeft: '250px' }}>
            <img
              src={myPhoto}
              alt="Portrait of Me"
              className="img-fluid rounded-circle shadow-lg animated-photo"
              style={{
                width: '400px',  // Lebar gambar ditingkatkan
                height: '400px', // Tinggi gambar disesuaikan
                objectFit: 'cover', // Agar gambar tetap terjaga proporsinya saat diubah ukuran
                borderRadius: '50%', // Efek oval dengan radius kecil
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: 'scale(1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
