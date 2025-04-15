import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import SelectCrop from '../components/SelectCrop';
import DragAndDrop from '../components/DragAndDrop';
import AgricultureNews from '../components/AgricultureNews';

const Footer = () => (
  <footer
    className="py-3 mt-5 shadow-lg"
    style={{
      backgroundColor: '#2E4B2D',
      color: '#F6D55C'
    }}
  >
    <Container className="text-center">
      <p className="mb-0 fw-semibold">&copy; 2025 Krishi Raksha. All rights reserved.</p>
    </Container>
  </footer>
);

const Home = () => {
  const [selectedCrop, setSelectedCrop] = useState('');

  const handleCropSelected = (crop) => {
    setSelectedCrop(crop);
  };

  return (
    <div className="home-wrapper transition-all" style={{ backgroundColor: '#F5F5DC', color: '#2E4B2D' }}>
      {/* Navbar */}
      <BootstrapNavbar style={{ backgroundColor: '#2E4B2D' }} variant="dark" expand="lg" sticky="top" className="shadow-sm py-2 transition-all">
        <Container>
          <BootstrapNavbar.Brand href="/" className="fs-3 fw-bold" style={{ color: '#F6D55C' }}>🌿Krishi Raksha</BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-semibold">
              <Nav.Link href="/home" className="nav-grow" style={{ color: '#F6D55C' }}>Home</Nav.Link>
              <Nav.Link href="/help" className="nav-grow" style={{ color: '#F6D55C' }}>Help</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      <AgricultureNews />

      <div className="text-center my-5 p-5 rounded-4 shadow-lg border" style={{ borderColor: '#F6D55C', backgroundColor: '#D0E8D0' }}>
        <h2 className="fw-bold mb-4 display-5" style={{ color: '#F6D55C' }}>Select Crop for Analysis</h2>
        <div className="p-4 rounded-3" style={{ backgroundColor: '#2E4B2D' }}>
          <SelectCrop onCropSelected={handleCropSelected} />
        </div>
      </div>

      <div className="text-center my-5">
        <h2 className="fw-bold mb-4" style={{ color: '#F6D55C' }}>Add Image for Analysis</h2>
        <div className="rounded-4 p-5 mb-4 shadow-lg" style={{ backgroundColor: '#D0E8D0', border: '2px solid #F6D55C' }}>
          <p style={{ color: '#2E4B2D' }}>Drag and drop an image here, or click to select an image</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <div className="p-3 rounded-4 border" style={{ backgroundColor: '#2E4B2D', borderColor: '#F6D55C' }}>
            <DragAndDrop selectedCrop={selectedCrop} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
