import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Mengimpor gaya AOS
import { ReactTyped } from 'react-typed'; // ReactTyped harus menggunakan default import
import { ArrowRightCircle } from 'react-bootstrap-icons'; // Ikon untuk efek interaktif
import myPhoto from '../assets/images/syul.jpg'; // Import foto Anda
import MyCV from '../assets/files/CV_Syamsul Amilien.pdf'; // Assuming it's correctly placed

const About = () => {
  // Inisialisasi AOS di dalam useEffect
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durasi animasi
      easing: 'ease-in-out', // Jenis transisi animasi
      once: true, // Animasi hanya sekali saat elemen muncul
    });
  }, []); // Array kosong berarti useEffect hanya dijalankan sekali setelah komponen pertama kali dirender

  const handleDownload = () => {
    // Using 'a' tag dynamically to trigger file download
    const link = document.createElement('a');
    link.href = MyCV;
    link.download = 'CV_Syamsul Amilien.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Gambar Saya */}
          <Col md={6} data-aos="fade-right">
          <div style={{ position: 'relative', paddingRight: '250px' }}>
              <img
                src={myPhoto}
                alt="About Me Portrait"
                className="img-fluid rounded-circle shadow-lg animated-photo"
                style={{ 
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

          {/* Deskripsi Tentang Saya */}
          <Col md={6} data-aos="fade-left">
            <h2 className="mb-4 fs-1 animated-text text-gradient">About Me</h2>
            <p className="lead animated-text">
              <ReactTyped
                strings={[
                  "I am a student of the university of aisyiyah yogyakarta and I take the information technology study program, I am only in the 3rd semester, and my hobby is hanging out..",
                  "I love Yuli antika sari.",
                  "saya sayang banget.",
                  "HEHEHE",
                ]}
                typeSpeed={80} // Kecepatan pengetikan (ms)
                backSpeed={50} // Kecepatan penghapusan teks (ms)
                backDelay={1200} // Delay sebelum menghapus teks
                loop={true} // Loop animasi pengetikan
                showCursor={true} // Menampilkan kursor seperti sedang mengetik
                cursorChar="|"
              />
            </p>
            {/* Download CV Button */}
            <Button
              onClick={handleDownload}
              variant="primary"
              className="mt-4"
            >
              Download CV <ArrowRightCircle size={25} />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
