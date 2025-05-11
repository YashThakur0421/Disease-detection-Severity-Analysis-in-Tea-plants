import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Form } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './FrontPage.css';

const FrontPage = () => {
  const scrollRef = useRef(null);
  const teamRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const teamMembers = [
    {
      name: 'Devasmita Kundu',
      src: '/profile1.jpg',
      description: 'ML Engineer',
      facebook: 'https://facebook.com/devasmita',
      twitter: 'https://twitter.com/devasmita',
      linkedin: 'https://linkedin.com/in/devasmita',
      github: 'https://github.com/devasmita'
    },
    {
      name: 'Samrat Ghosh',
      src: '/profile2.jpg',
      description: 'Backend Developer',
      facebook: 'https://facebook.com/samrat',
      twitter: 'https://twitter.com/samrat',
      linkedin: 'https://linkedin.com/in/samrat',
      github: 'https://github.com/samrat'
    },
    {
      name: 'Arya Chatterjee',
      src: '/profile3.jpg',
      description: 'Data Analyst',
      facebook: 'https://facebook.com/arya',
      twitter: 'https://twitter.com/arya',
      linkedin: 'https://linkedin.com/in/arya',
      github: 'https://github.com/arya'
    },
    {
      name: 'Yash Thakur',
      src: '/profile4.jpg',
      description: 'Frontend Developer',
      facebook: 'https://facebook.com/yash',
      twitter: 'https://twitter.com/yash',
      linkedin: 'https://linkedin.com/in/yash',
      github: 'https://github.com/yash'
    },
    {
      name: 'Jaya Sinha Mahapatra',
      src: '/profile5.jpg',
      description: 'Frontend Developer',
      facebook: 'https://facebook.com/jaya',
      twitter: 'https://twitter.com/jaya',
      linkedin: 'https://linkedin.com/in/jaya',
      github: 'https://github.com/jaya'
    },
    {
      name: 'Pranjal Chakraborty',
      src: '/profile6.jpg',
      description: 'Data Analyst',
      facebook: 'https://facebook.com/pranjal',
      twitter: 'https://twitter.com/pranjal',
      linkedin: 'https://linkedin.com/in/pranjal',
      github: 'https://github.com/pranjal'
    }
  ];

  useEffect(() => {
    let autoScrollAmount = scrollAmount;
    const scroll = () => {
      if (scrollRef.current) {
        autoScrollAmount += 2.5;
        scrollRef.current.scrollTo({ left: autoScrollAmount, behavior: 'auto' });
        if (autoScrollAmount >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          autoScrollAmount = 0;
        }
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [scrollAmount]);

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollDistance = 300;
      const newScrollAmount = direction === 'left' ? scrollRef.current.scrollLeft - scrollDistance : scrollRef.current.scrollLeft + scrollDistance;
      scrollRef.current.scrollTo({ left: newScrollAmount, behavior: 'smooth' });
      setScrollAmount(newScrollAmount);
    }
  };

  return (
    <div className="bg-light text-dark" style={{ backgroundColor: '#F5F5DC' }}>
      {/* Navbar */}
      <Navbar style={{ backgroundColor: '#2E4B2D' }} variant="dark" expand="lg" sticky="top" className="shadow-sm py-2">
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold" style={{ color: '#F6D55C' }}>🌿Krishi Raksha</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-semibold">
              <Nav.Link href="/home" style={{ color: '#F6D55C' }} className="nav-grow">Home</Nav.Link>
              <Nav.Link href="/help" style={{ color: '#F6D55C' }} className="nav-grow">Help</Nav.Link>
              <Nav.Link onClick={scrollToTeam} style={{ color: '#F6D55C' }} className="nav-grow">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/bg-img-2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh'
        }}
      >
        <Container>
          <h1 className="display-3 fw-bold mb-3">Welcome to Krishi Raksha</h1>
          <p className="lead mb-4">Empowering farmers through innovation and connection</p>
          <Button variant="outline-light" size="lg" href="/home">Enter Platform</Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <h2 className="text-center mb-5 fw-bold display-6">Why Choose Krishi Raksha?</h2>
        <Row className="g-4">
          <Col md={4} className="d-flex">
            <Card className="flex-fill shadow-lg border-0">
              <Card.Img variant="top" src="/news1.png" style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="fw-bold">Early and Accurate Disease Detection</Card.Title>
                <Card.Text>Krishi Raksha uses advanced image processing and machine learning—especially Convolutional Neural Networks (CNNs)—to detect tea plant diseases like blight, anthracnose, and brown blight early and accurately, minimizing crop damage and ensuring timely interventions.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="flex-fill shadow-lg border-0">
              <Card.Img variant="top" src="/news2.png" style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="fw-bold">Reduced Economic Loss and Improved Productivity</Card.Title>
                <Card.Text>By identifying diseases early and automating the detection process, Krishi Raksha helps prevent yield loss of up to 30%, directly supporting farmers in increasing crop quality and reducing financial risk.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex">
            <Card className="flex-fill shadow-lg border-0">
              <Card.Img variant="top" src="/news3.png" style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="fw-bold">Scalable, Automated, and Practical Solution</Card.Title>
                <Card.Text>Unlike manual inspection methods, Krishi Raksha offers a scalable and automated system that is reliable, less labor-intensive, and suited for real-world agricultural environments—even in resource-constrained areas.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* About Us Section - Auto Sliding Cards */}
      <Container className="my-5" ref={teamRef}>
        <h2 className="text-center mb-4 fw-bold display-6">Meet Our Team</h2>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button style={{ backgroundColor: '#2E4B2D', border: 'none' }} onClick={() => handleManualScroll('left')}><FaArrowLeft color="#F6D55C" /></Button>
          <Button style={{ backgroundColor: '#2E4B2D', border: 'none' }} onClick={() => handleManualScroll('right')}><FaArrowRight color="#F6D55C" /></Button>
        </div>
        <div
          ref={scrollRef}
          className="d-flex gap-4 px-3 overflow-hidden"
          style={{
            scrollSnapType: 'x mandatory',
            whiteSpace: 'nowrap',
            width: '100%',
            scrollBehavior: 'smooth',
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="d-inline-block flex-shrink-0 text-center team-card"
              style={{ width: '300px', scrollSnapAlign: 'start', backgroundColor: '#D0E8D0', borderRadius: '1rem', padding: '1rem' }}
            >
              <div
                className="rounded-circle mx-auto shadow-lg border-0 mb-3"
                style={{
                  width: '200px',
                  height: '200px',
                  backgroundColor: '#f8f9fa',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={member.src}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h5 className="fw-bold mb-1">{member.name}</h5>
              <p className="text-dark mb-1">{member.description}</p>
              <div className="d-flex justify-content-center gap-3">
                <a href={member.facebook} className="text-dark"><FaFacebook /></a>
                <a href={member.twitter} className="text-dark"><FaTwitter /></a>
                <a href={member.linkedin} className="text-dark"><FaLinkedin /></a>
                <a href={member.github} className="text-dark"><FaGithub /></a>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2E4B2D', color: '#F6D55C' }} className="text-center py-4 mt-5">
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} Krishi Raksha. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default FrontPage;
