import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { PostSchema } from "../../pages/ViewPost/PostValidation";
import BasicButton from "../../components/BasicButton";
import TextInput from "../../components/TextInput";
import { toast } from "react-toastify";
import { useAddPostMutation } from "../../redux/api/PostApi";
import TextArea from "../../components/TextArea";



const AddPost = () => {
  const [userName, setUserName] = useState("");
  const [sport, setSport] = useState("");
  const [matchDetails, setMatchDetails] = useState("");
  const [matchDate, setMatchDate] = useState("");
  const [betAmount, setBetAmount] = useState("");
  const [image, setImage] = useState("");
  const [placeOfMatch, setPlaceOfMatch] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const fileInputRef = useRef(null);
  const [AddPostData,{isLoading}]=useAddPostMutation();
  
  console.log(userName);
  console.log(sport);
  console.log(matchDetails);
  console.log(matchDate);
  console.log(betAmount);
  console.log(image);
  console.log(placeOfMatch);
  console.log(phoneNumber);





  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/post");
  };

 
  const initialValues = {
    userName: "",
    sport: "",
    matchDetails: "",
    matchDate: "",
    betAmount: "",
    image: "",
    placeOfMatch:"",
    phoneNumber:"",
   
    
  };
  const handleAddData = async () => {
    try {
      
      const formattedDate = new Date(matchDate);
      const day = String(formattedDate.getDate()).padStart(2, '0');
      const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
      const year = formattedDate.getFullYear();
      const formattedDateString = `${day}/${month}/${year}`;
      console.log(formattedDateString);

      const response = await AddPostData ({
        userName: userName,
        sport: sport,
        matchDetails:matchDetails,
        matchDate: formattedDateString,
        betAmount: betAmount,
        image:image,
        placeOfMatch:placeOfMatch,
        phoneNumber:phoneNumber
       
     
    
        
      });
    
   
      if (response?.data) {
        setUserName("");
        setSport("");
        setMatchDetails("");
        setMatchDate("");
        setBetAmount("");
        setImage("");
        setPlaceOfMatch("")
        setPhoneNumber("")
        toast.success(response?.data?.message, { autoClose: 1000 });
        setTimeout(() => navigate("/admin/post"), 3000);
        console.log(response.error.data);
       
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
   
    }
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
setImage(file)
  };


  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={PostSchema}
          onSubmit={handleAddData}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              <Form>
                <Row className="d-flex flex-row justify-content-between align-items-center">
                  <Col className="d-flex justify-content-start mb-3 mt-3">
                    <h4 onClick={handleCancel}>
                      <AiOutlineArrowLeft />
                    </h4>
                    <h4>Add Post</h4>
                  </Col>
                  <Col className="d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center">
                    <BasicButton
                      className="m-1"
                      variant="secondary"
                      onClick={handleCancel}
                      label="Cancel"
                    />
                    <BasicButton
                      className="m-1"
                      label="Save"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                     disabled={isSubmitting}
                      onClick={
                        (userName=== '')||
                        ( sport === '')||
                        (matchDetails=== '')||
                        matchDate === ''||
                        (betAmount=== '')||
                        (phoneNumber=== '')||
                        image === ''||

                          (touched.userName && errors.userName) ||
                        (touched.sport && errors.sport) ||
                        (touched.matchDetails && errors.matchDetails) ||
                        (touched.matchDate && errors.matchDate) || 
                        (touched.betAmount && errors.betAmount) ||
                        (touched.phoneNumber && errors.phoneNumber) ||
                        (touched.image && errors.image) 
                        
                       
                          ? handleSubmit
                          : handleAddData
                      }  />
                  </Col>
                </Row>
                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                 
                
                   
                    
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="User Name"
                        type=""
                        name="userName"
                        className={`form-control ${
                          touched.userName && errors.userName ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setUserName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.userName && errors.userName ? (
                            <p className="text-danger">{errors.userName}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                

                    <Col
                      className="m-2"
                      lg="12"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Sport"
                        type=""
                        name="sport"
                        className={`form-control ${
                          touched.sport && errors.sport ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setSport(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.sport && errors.sport ? (
                            <p className="text-danger">{errors.sport}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col
                      className="m-2"
                      lg="12"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Place Of Match"
                        type=""
                        name="placeOfMatch"
                        className={`form-control ${
                          touched.placeOfMatch && errors.placeOfMatch ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setPlaceOfMatch(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.placeOfMatch && errors.placeOfMatch ? (
                            <p className="text-danger">{errors.placeOfMatch}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>


                    <Col className="m-2" lg="12" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Image"
                        type="file" 
                        name="image"
                        className={`form-control ${
                          touched.image && errors.image ? "is-invalid" : ""
                        }`}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        validation={
                          touched.image && errors.image ? (
                            <p className="text-danger">{errors.image}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    </Col>


                    <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Phone Number"
                        type="number"
                        name="phoneNumber"
                        className={`form-control ${
                          touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.phoneNumber && errors.phoneNumber ? (
                            <p className="text-danger">{errors.phoneNumber}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                   
                    
                 
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="match Date"
                        type="date"
                        name="matchDate"
                        className={`form-control ${
                          touched.matchDate && errors.matchDate ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setMatchDate(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.matchDate && errors.matchDate ? (
                            <p className="text-danger">{errors.matchDate}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                


                    <Col
                      className="m-2"
                      lg="12"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Bet Amount"
                        type=""
                        name="betAmount"
                        className={`form-control ${
                          touched.betAmount && errors.betAmount ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setBetAmount(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.betAmount && errors.betAmount ? (
                            <p className="text-danger">{errors.betAmount}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                   

                    <Col className="m-2" lg="12" xxl="6" xl="12" md="12" sm="12">
  <TextArea
    label="Match Details"
    type=""
    name="matchDetails"
    className={`form-control ${
      touched.matchDetails && errors.matchDetails ? "is-invalid" : ""
    }`}
    onChange={(e) => {
      setMatchDetails(e.target.value);
      handleChange(e);
    }}
    onBlur={handleBlur}
  />
  {touched.matchDetails && errors.matchDetails && (
    <p className="text-danger">{errors.matchDetails}</p>
  )}
</Col>



                 
                    </Col>
                </Row>

                <Row className="d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center">
                  <Col className="d-flex justify-content-start align-items-center">
                    <BasicButton
                      className="m-1"
                      variant="secondary"
                      onClick={handleCancel}
                      label="Cancel"
                    />
                  </Col>
                  <Col className="d-flex justify-content-end align-items-center">
                    <BasicButton
                      className="m-1"
                      label="Save"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                      disabled={isSubmitting}
                      onClick={
                        (userName=== '')||
                       ( sport === '')||
                        (matchDetails=== '')||
                        matchDate === ''||
                        (betAmount=== '')||
                        (phoneNumber=== '')||
                        image === ''||

                          (touched.userName && errors.userName) ||
                        (touched.sport && errors.sport) ||
                        (touched.matchDetails && errors.matchDetails) ||
                        (touched.matchDate && errors.matchDate) || 
                        (touched.betAmount && errors.betAmount) ||
                        (touched.phoneNumber && errors.phoneNumber) ||
                        (touched.image && errors.image)  
                        
                       
                          ? handleSubmit
                          : handleAddData
                      }
                    />
                  </Col>
                </Row>
              </Form>
            </>
          )}
        </Formik>
      </Container>
    </div>
  );
};
export default AddPost;