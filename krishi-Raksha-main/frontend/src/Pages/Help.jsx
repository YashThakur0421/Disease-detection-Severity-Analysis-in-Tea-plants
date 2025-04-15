import React, { useState, useEffect } from 'react';
import './Help.css';
import axios from 'axios';
import { Container, Card, InputGroup, FormControl, Button, Navbar, Nav } from 'react-bootstrap';
import { BsPersonFill, BsRobot } from 'react-icons/bs';

function Help() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    const requestBody = {
      inputs: inputValue
    };

    const headers = {
      Authorization: "Bearer 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"
    };

    try {
      const response = await axios.post('https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct', requestBody, { headers });
      setTimeout(() => {
        setMessages(prev => [...prev, { text: response.data.messages[0].content, sender: 'bot' }]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className="min-vh-100 text-dark"
      style={{ background: 'linear-gradient(135deg, #F5F5DC, #D0E8D0)' }}
    >
      {/* Navbar */}
      <Navbar style={{ backgroundColor: '#2E4B2D' }} variant="dark" expand="lg" sticky="top" className="shadow-sm py-2">
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold text-warning">🌿Krishi Raksha</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-semibold align-items-center">
              <Nav.Link href="/home" className="text-warning nav-grow">Home</Nav.Link>
              <Nav.Link href="/help" className="text-warning nav-grow">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 style={{ color: '#2E4B2D' }}>Live Help Desk</h3>
        </div>
        <Card className="shadow-lg rounded-4 p-4 text-dark" style={{ backgroundColor: '#D0E8D0' }}>
          <div className="chat-container lux-chat">
            <div className="messages-container lux-messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`d-flex align-items-start gap-2 mb-3 ${message.sender === 'bot' ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`p-3 rounded-3`} style={{
                    backgroundColor: message.sender === 'bot' ? '#F6D55C' : '#ffffff',
                    color: '#2E4B2D',
                    border: message.sender !== 'bot' ? '1px solid #ccc' : 'none',
                    maxWidth: '70%'
                  }}>
                    {message.text}
                  </div>
                  <div className="fs-4 mt-1">
                    {message.sender === 'bot' ? <BsRobot className="text-warning" /> : <BsPersonFill className="text-dark" />}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="px-3 py-2 rounded-3 fst-italic" style={{ backgroundColor: '#F6D55C', color: '#2E4B2D' }}>Typing...</div>
                  <BsRobot className="text-warning fs-4" />
                </div>
              )}
            </div>

            <InputGroup className="input-container mt-4">
              <FormControl
                placeholder="Type your message..."
                value={inputValue}
                onChange={handleInputChange}
                className="rounded-start-pill"
              />
              <Button style={{ backgroundColor: '#F6D55C', borderColor: '#F6D55C', color: '#2E4B2D' }} className="rounded-end-pill px-4 fw-bold shadow-sm" onClick={sendMessage}>
                Send
              </Button>
            </InputGroup>

            {/* FAQ Section */}
            <div className="mt-4">
              <h5 className="fw-bold" style={{ color: '#2E4B2D' }}>Quick Help:</h5>
              <div className="d-flex flex-wrap gap-2">
                {["How to choose a crop?", "How to use the platform?", "What crops grow best in summer?"].map((faq, index) => (
                  <Button key={index} style={{ borderColor: '#F6D55C', color: '#2E4B2D' }} variant="outline-warning" className="rounded-pill border-2" onClick={() => setInputValue(faq)}>
                    {faq}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Container>

      {/* Footer Section */}
      <footer className="text-center py-4" style={{ backgroundColor: '#2E4B2D', color: '#F6D55C' }}>
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} Krishi Raksha. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default Help;
