import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { LuSend } from 'react-icons/lu';
import Footer from '../Footer';
import Header from '../Header';

const Contact = () => {
  return (
    <>
      <Header />
      {/* Contact Us Section */}
      <div className="contact-us">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h1 className="text-center">Contact Us</h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact Form and Map Section */}
      <Container className="mt-5 mb-5">
        <Row className="align-items-center">

            <h2 className='text-center mt-2 mb-4'style={{color:"#6B78B7"}}> Get a callback from Us!</h2>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 align-items-center justify-content-center text-start">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31422.909140277807!2d78.5758501111238!3d10.110245757146155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b008ba9901a9939%3A0x803ea5abdec32b03!2s630211%2C%20Tirupattur%2C%20Tamil%20Nadu%20630211!5e0!3m2!1sen!2sin!4v1718279868355!5m2!1sen!2sin"
                width="300"
                height="250"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <Form>
              <Form.Group controlId="name" className="mt-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Name.."
                  name="name"
                  required
                  style={{ borderColor: '#6B78B7' }}
                />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email.."
                  name="email"
                  required
                  style={{ borderColor: '#6B78B7' }}
                />
              </Form.Group>

              <Form.Group controlId="message" className="mt-3">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter your Message.."
                  rows={4}
                  name="message"
                  required
                  style={{ borderColor: '#6B78B7' }}
                />
              </Form.Group>

              <Row className="justify-content-center">
                <Col xs="auto" className="mt-3">
                  <Button
                    className="c-button c-hover"
                    type="submit"
                    style={{ backgroundColor: "#6B78B7", border: "none" }}
                  >
                    Submit <LuSend />
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
