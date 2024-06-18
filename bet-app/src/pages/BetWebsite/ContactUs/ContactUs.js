import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Modal } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import { Formik } from 'formik';
import { ContactUsSchema } from "../ContactUs/ContactUsValidation";
import { useSendContactMutation } from '../../../redux/api/ContactUsApi';
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';
import successAnimation from '../../../assets/images/SuccessAnimation.json';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [SendContact] = useSendContactMutation();


console.log(name);
console.log(email);
console.log(message);

  const handleSendRequest = async () => {
    console.log("responce1");

    try {
      console.log("responce2");
      const response = await SendContact({
        name: name,
        email: email,
        message: message,
      });

      if (response?.data) {
      console.log("responce3");

        
        // toast.success(response?.data?.message, { autoClose: 1000 });
        setSuccessMessage(response.data.message);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 4000);
        setName("");
        setEmail("");
        setMessage(""); 
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

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
          <h2 className='text-center mt-2 mb-4' style={{ color: "#6B78B7" }}>Raise Ticket!</h2>
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
            <Formik
              initialValues={initialValues}
              validationSchema={ContactUsSchema}
              onSubmit={handleSendRequest}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name" className="mt-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Name.."
                      name="name"
                      value={name}
                      onChange={(e) => {
                        handleChange(e);
                        setName(e.target.value);
                      }}
                      onBlur={handleBlur}
                      isInvalid={touched.name && !!errors.name}
                      style={{ borderColor: '#6B78B7' }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="email" className="mt-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Email.."
                      name="email"
                      value={email}
                      onChange={(e) => {
                        handleChange(e);
                        setEmail(e.target.value);
                      }}
                      onBlur={handleBlur}
                      isInvalid={touched.email && !!errors.email}
                      style={{ borderColor: '#6B78B7' }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="message" className="mt-3">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your Message.."
                      rows={4}
                      name="message"
                      value={message}
                      onChange={(e) => {
                        handleChange(e);
                        setMessage(e.target.value);
                      }}
                      onBlur={handleBlur}
                      isInvalid={touched.message && !!errors.message}
                      style={{ borderColor: '#6B78B7' }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row className="justify-content-center">
                    <Col xs="auto" className="mt-3">
                      <Button
                        onClick={handleSubmit}
                        className="c-button c-hover"
                        type="submit"
                        style={{ backgroundColor: "#6B78B7", border: "none" }}
                      >
                        Submit 
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
      
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {/* <Modal.Header closeButton>    
        </Modal.Header> */}
        <Modal.Body>
        <Lottie options={defaultOptions} height={80} width={80} style={{textAlign:"center"}}/>
       <p style={{fontSize:"18px",textAlign:"center",fontWeight:"bold"}}>{successMessage}</p>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
};

export default Contact;
