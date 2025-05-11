import React, { useState, useRef } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button, Card, Spinner } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import DragAndDrop from '../components/DragAndDrop';
import AgricultureNews from '../components/AgricultureNews';

const Footer = () => (
  <footer style={{ backgroundColor: '#2E4B2D', color: '#F6D55C' }} className="text-center py-4 mt-5">
    <Container>
      <p className="mb-0">&copy; {new Date().getFullYear()} Krishi Raksha. All rights reserved.</p>
    </Container>
  </footer>
);

const Home = () => {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleCropSelected = (crop) => {
    setSelectedCrop(crop);
  };

  const handleImageChange = (file) => {
    if (file && ['image/jpeg', 'image/png'].includes(file.type)) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDetect = async () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        disease: 'Leaf Blight',
        confidence: 0.92,
        description: 'A fungal infection affecting tea leaves.'
      });
      setLoading(false);
    }, 1000);
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

      <div className="text-center my-5">
        <div className="rounded-4 p-5 mb-4 shadow-lg" style={{ backgroundColor: '#D0E8D0', border: '2px solid #F6D55C' }}>
          <DragAndDrop onImageChange={handleImageChange} />
          {image && (
            <img src={image} alt="Preview" className="mt-3 rounded" style={{ maxWidth: '400px' }} />
          )}
          <Button
            style={{ backgroundColor: '#F6D55C', color: '#2E4B2D', border: 'none' }}
            className="mt-3"
            onClick={handleDetect}
            disabled={!image || loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : 'Detect Disease'}
          </Button>
        </div>

        {/* Result Section */}
        {result && (
          <Card className="mt-5 shadow-lg" style={{ backgroundColor: '#D0E8D0' }}>
            <Card.Body>
              <Card.Title className="fw-bold">{result.disease}</Card.Title>
              <Card.Text>Confidence: {(result.confidence * 100).toFixed(0)}%</Card.Text>
              <Card.Text>{result.description}</Card.Text>
              <Button
                style={{ backgroundColor: '#F6D55C', color: '#2E4B2D', border: 'none' }}
                href="/severity"
              >
                View Severity
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
