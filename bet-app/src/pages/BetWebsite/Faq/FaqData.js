import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Uparrow from '../../../assets/images/faqup.png';
import Downarrow from '../../../assets/images/faqdown.png';

const FaqData = ({ questions }) => {
  const [isOpen, setIsOpen] = useState(Array(questions.length).fill(false));
  const toggleFaq = (index) => {
    setIsOpen((prevOpen) =>
      prevOpen.map((isOpenState, i) => (i === index ? !isOpenState : isOpenState))
    );
  };
  return (
    <>
 
    <Container className=' mb-4 mt-4'>
      <Row>
        <Col xs={12} md={12} className='mt-5'>
          <h1 className='d-flex justify-content-center align-items-center' style={{ fontSize: '45px', color: '#6B78B7', letterSpacing: '1px', fontWeight: 'bold' }}>FAQ</h1>
        </Col>
      </Row>
      <div className='mb-5'>
        {questions.map((question, index) => (
          <div key={question.id} style={{marginBottom:'10px',border:' 1px solid #425486'}}>
            <div className="d-flex align-item-center" style={{padding: '10px',
  fontSize: '20px',
  color: '#6B78B7',
  letterSpacing: '1px'}} onClick={() => toggleFaq(index)} aria-expanded={isOpen[index]}>
              <span className={`faq-question ${isOpen[index] ? 'open' : ''}`}>
                {question.title}
              </span>
              <img
                src={isOpen[index] ? Uparrow : Downarrow}
                alt={isOpen[index] ? 'Close FAQ' : 'Open FAQ'}
                style={{width: '20px',
  height: '20px',
  marginLeft: 'auto',
  marginTop: '13px',
  marginBottom: '2px'}}
              />
            </div>
            {isOpen[index] && (
              <div style={{padding: '10px',
              fontSize: '16px',
              color: '#000',
              letterSpacing: '1px'}}>
                <p>{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
    </>
  );
};
export default FaqData;