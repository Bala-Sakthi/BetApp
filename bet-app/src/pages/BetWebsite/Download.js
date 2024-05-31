import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Downloadimage from "../../assets/images/mobileimages.webp";
const DownloadAppSection = () => {
  return (
    <>
      <Container className="mt-4 mb-4">
        <Row>
          <Col
            xs={12}
            xl={6}
            sm={12}
            xxl={6}
            md={6}
            lg={6}
            className="fade-in-up mt-4"
            data-wow-delay="0.1s "
          >
            {" "}
            <img
              className="img-fluid wow zoomIn"
              data-wow-delay="0.5s"
              src={Downloadimage}
              alt="Flawk"
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            sm={12}
            xxl={6}
            md={6}
            lg={6}
            className="fade-in-up mt-4"
            data-wow-delay="0.1s "
          >
            {" "}
            <div className="section-title position-relative mb-4 pb-2">
              <h1 className="mt-2">
                <br />
                <br />
                Download Our App
              </h1>
            </div>
            <p className="mb-4"style={{ fontSize: '20px' }}>
              Wherever you're going, we're right there with you
            </p>
            <p style={{ fontSize: '20px' }}>
              "Download the Bet and Play app today. Get access to trusted,
              authentic, and real-time information about sports events, game
              schedules, betting odds, player stats, and more at your
              fingertips."
            </p>
            <img
              src="https://tow-admin-web.onrender.com/static/media/play-store-badge-en.471c6e6366da0bee65f0.webp"
              alt="playstore"
              srcSet=""
              style={{ Width: "40px", height: "40px" }}
            />
            <img
              src="https://www.avantiwestcoast.co.uk/-/media/images/android-rating.png?h=29&w=118"
              alt="android-rating"
              srcSet=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DownloadAppSection;