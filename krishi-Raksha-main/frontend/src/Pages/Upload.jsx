import React, { useState } from 'react';
import { Container, Button, Card, Spinner } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DragAndDrop from '../components/DragAndDrop';
import Modal from '../components/Modal';

const Upload = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hardcode tea as the crop (UI/UX spec is tea-specific)
  const selectedCrop = 'Tea';

  // Handle API response from DragAndDrop
  const handleApiResponse = (response) => {
    setApiResponse(response);
    setShowModal(true);
    setLoading(false);
  };

  // Trigger detection
  const handleDetect = () => {
    setLoading(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Placeholder for future functionality
  const handleDownload = () => {
    // Implement download if needed
  };

  const handleMarketplace = () => {
    // Navigate to remedies instead of marketplace
    window.location.href = '/remedies';
  };

  return (
    <div style={{ backgroundColor: '#F5F5DC', color: '#2E4B2D', minHeight: '100vh' }}>
      <Navbar />
      <Container className="my-5 text-center">
        <h2 className="fw-bold mb-4 display-5" style={{ color: '#F6D55C' }}>Upload Tea Leaf Image</h2>
        <Card className="p-5 rounded-4 shadow-lg" style={{ backgroundColor: '#D0E8D0', border: '2px solid #F6D55C' }}>
          <DragAndDrop
            selectedCrop={selectedCrop}
            onApiResponse={handleApiResponse}
            onDetect={handleDetect}
          />
          {loading && <Spinner animation="border" className="mt-3" style={{ color: '#F6D55C' }} />}
        </Card>

        {/* Result Card (alternative to Modal for persistent display) */}
        {apiResponse && (
          <Card className="mt-5 shadow-lg" style={{ backgroundColor: '#D0E8D0' }}>
            <Card.Body>
              <Card.Title className="fw-bold">
                Probably Infected by: {apiResponse && apiResponse[Object.keys(apiResponse)[0]] ? Object.keys(apiResponse)[0].replace(/_/g, ' ') : 'Unknown'}
              </Card.Title>
              <Card.Text>
                Confidence: {apiResponse && apiResponse[Object.keys(apiResponse)[0]] ? (apiResponse[Object.keys(apiResponse)[0]] * 100).toFixed(0) : 'N/A'}%
              </Card.Text>
              <Button
                style={{ backgroundColor: '#F6D55C', color: '#2E4B2D', border: 'none' }}
                href="/severity"
              >
                View Severity
              </Button>
            </Card.Body>
          </Card>
        )}
      </Container>

      <Modal
        showModal={showModal}
        closeModal={closeModal}
        apiResponse={apiResponse}
        handleDownload={handleDownload}
        handleMarketplace={handleMarketplace}
      />

      <Footer />
    </div>
  );
};

export default Upload;