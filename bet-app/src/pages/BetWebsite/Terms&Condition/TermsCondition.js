import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "../Footer";
import Header from "../../../components/WebsiteHeader";

const TermCondition = () => {
  return (
    <>
<Header/>
      <Container
        
        className="justify-content-start align-items-start mt-5 mb-5"
      >
        <Row className="justify-content-start ">
          <Col xs={12} md={12}>
            <h2
              className="text-center mt-5 "
              style={{
                fontSize: "24px",
                color: "#6B78B7",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              TERMS OF USE
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
              By installing or using the MeetInGround app, you agree to these terms. Please review them carefully before proceeding. Any attempt to replicate, alter, or use our trademarks is strictly prohibited. You are also prohibited from accessing the app's source code, translating it into other languages, or creating derivative versions. All intellectual property rights remain the sole property of DriftMark Technology. We reserve the right to modify the app or introduce charges at any time.
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
             Your Responsibility
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
             The MeetInGround app processes your personal information to provide our services. Ensuring the security of your phone and access to the app is your responsibility. We strongly advise against jailbreaking or rooting your phone, which can expose it to security risks. The app integrates with third-party services, each with its own Terms and Conditions.
            </p>

            <p
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
            Data Collection
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
             To enhance the app's functionality, MeetInGround may gather specific data, including:
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
                <b>IP address:</b> Used to approximate your general location.
              </li>
              <li>
                <b>Crash logs:</b> Help diagnose issues and improve the software.
              </li>
              <li>
                <b>Performance metrics:</b> Analyze user behavior and assess app features.
              </li>
              <li>
                {" "}
                <b>Device ID: :</b>Used for advertising and analytics.
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
              License Use


            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
          You are prohibited from:
            </p>
            <p>
              <ul
                style={{
                  color: "black",
                  fontSize: "18px",
                  letterSpacing: "1px",
                  textAlign: "start",
                  
                }}
              >
                <li>
                Reverse engineering or decompiling the app.
                </li>
                <li>
                Modifying or creating derivative works from the app.
                </li>
                <li>
                Using the app for illegal activities or unauthorized commercial purposes.
                </li>
                <li>
                Making the app available over a network for multiple users.
                </li>
                <li>
                Using the app to send automated queries or unsolicited emails.
                </li>
                <li>
                Using our intellectual property in other applications or devices.
                </li>
               
              </ul>
            </p>
            <p
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              {" "}
              Android Devices{" "}
            </p>

            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
             For users downloading from the Google Play Store, the license is non-transferable and limited to Android devices in accordance with Google Play's usage rules. DriftMark Technology provides all necessary maintenance and support for the app.
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
              Review Guidelines
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
              Ensure your review reflects firsthand experience.
              </li>
              <li>
              Avoid offensive language and discriminatory references.
              </li>
              <li>
              Do not mention illegal activities or post misleading statements.

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
             Updates to These Terms
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
             We may revise these Terms periodically. Check this page regularly for updates. Continued use of the app after changes signifies your acceptance.
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
              Contact Us
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
              If you have any questions, contact us at
              <a href="mailto:meetinground@gmail.com">info@meetinground</a>
            </p>
            <p
              style={{
                color: "black",
                fontSize: "18px",
                letterSpacing: "1px",
                textAlign: "start",
              }}
            >
            Thank you for choosing MeetInGround! Enjoy betting on sports like cricket, football, basketball, volleyball, tennis, and more
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default TermCondition;