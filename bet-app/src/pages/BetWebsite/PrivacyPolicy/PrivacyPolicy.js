import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Footer from "../Footer";
import Header from "../../../components/WebsiteHeader"

const PrivacyPolicy = () => {
  return (
    <>
     <Header/>
      <Container
        
        className="justify-content-start align-items-start mt-5  mb-5 "
      >
        <Row className="justify-content-center ">
          <Col xs={12} md={12}>
            <h2
              className="text-center mt-5"
              style={{
                fontSize: "24px",
                color: "#6B78B7",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Privacy Policy
            </h2>
            <p
              className="mt-3"
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
             Welcome to MeetInGround! Please read these terms and conditions prior to using the products and services offered by Driftmark Technology. By using the product, you agree to be legally bound by the terms and conditions, privacy policy, and services (including without limitations all disclaimers, exclusion of warranties, and limitations of liability contained therein). If you do not agree with these terms, please do not use the products and services offered by Driftmark Technology.
            </p>
          </Col>

          <Col xs={12} md={12} className="text-start mt-2">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
             Personal Identification Information
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
             We may collect personal identification information from Users in various ways, including but not limited to when Users visit our Service. Users may be asked for, as appropriate, their name, email address, phone number, profile image, payment details, and other relevant information. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Service-related activities.
            </p>
          </Col>

          <Col xs={12} md={12} className="text-start mt-2">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              How We Use Collected Information
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
             Driftmark Technology may collect and use User's personal information for the following purposes:
            </p>
            <ul
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
              <li>
                <b>To improve customer service:</b> The information you provide helps us respond to your customer service requests and support needs more efficiently.
              </li>
              <li>
                <b>To personalize user experience:</b> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Service.
              </li>
              <li>
                <b>To improve our Service:</b> We may use the feedback to improve our products and Services.
              </li>
              <li>
                <b>To process transactions:</b> We may use the information Users provide about themselves when placing a bet or engaging in game activities to provide service to that order.
              </li>
            </ul>
          </Col>

          <Col xs={12} md={12} className="text-start mt-2">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              How We Protect Your Information
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
             We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our Service.
            </p>
          </Col>

          <Col xs={12} md={12} className="text-start mt-2">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              Sharing Your Personal Information
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
             We do not sell, trade, or rent User's personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
            </p>
          </Col>

          <Col xs={12} md={12} className="text-start mt-2">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              Compliance with the Children Online Privacy Protection Act
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
      Our app doesn’t against with Children Online Privacy Protection Act.
              
            </p>
          </Col>

          <Col xs={12} md={12} className="text-start mt-2">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              Changes to This Privacy Policy
            </p>
            <p style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}>
             Driftmark Technology reserves the right to modify this privacy policy at any time. We encourage Users to review this page regularly to stay informed about how we are protecting the personal information we collect. By continuing to use the Service after any changes to this policy are posted, you acknowledge and accept those changes.
            </p>
          </Col>

          <Col xs={12} md={12} className="text-start mt-2">
            <p
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              Your Acceptance of These Terms
            </p>
            <p style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}>
             By using this Service, you signify your acceptance of this policy. If you disagree with this policy, please do not use our Service. Your continued use of the Service following the posting of changes to this policy will be deemed your acceptance of those changes. If you have any questions about this Privacy Policy, the practices of this Service, or your dealings with this Service, please contact us at 
              <a href="mailto:meetinground@gmail.com"> info@meetinground</a>

              <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
              >Thank you for choosing MeetInGround! Enjoy betting on your favorite sports like cricket, football, basketball, volleyball, tennis, and more.</p>
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;