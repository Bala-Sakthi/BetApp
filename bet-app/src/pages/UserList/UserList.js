import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import BasicTable from "../../components/TablePaginationComponent";
import { useGetEmailListQuery, useGetUserListQuery, useSendMailMutation } from "../../redux/api/UserListApi";
import Loader from "../../pages/Loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";
import { HiMiniUserCircle } from "react-icons/hi2";
import axios from "axios";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Select from "react-select";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";



const UserList = () => {
  const [data, setData] = useState([]);
  const [seconddata, setSeconddata] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [mailHeader, setMailHeader] = useState("");
  const [mailBody, setMailBody] = useState("");
  const [mail, setMail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isSubmit, setIsSumbit] = useState(false);
  const [mailList, setMailList] = useState("");
  const { data: MailData } = useGetEmailListQuery(mailList);
  const [SendMail] = useSendMailMutation();
  const {
    data: UserListData,
    isLoading,
    refetch,
  } = useGetUserListQuery({ page: currentPage, search: searchTerm });

  useEffect(() => {
    if (seconddata && seconddata.data) {
      setData(seconddata.data);
      setStartIndex(seconddata.pagination.startIndex);
      setCurrentPage(seconddata.pagination.currentPage);
      setTotalItem(seconddata.pagination.totalItems);
      setEndIndex(seconddata.pagination.endIndex);
      setTotalPages(seconddata.pagination.totalPages);
    }
  }, [seconddata]);

  useEffect(() => {
    if (UserListData && UserListData.data) {
      setData(UserListData.data);
      setStartIndex(UserListData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(UserListData.pagination.totalItems);
      setEndIndex(UserListData.pagination.endIndex);
      setTotalPages(UserListData.pagination.totalPages);
    }
  }, [UserListData, currentPage]);

  console.log(UserListData);

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
    setDate("");
  };

  const handleSearch = () => {
    setIsSearching(true);
    setSearchTerm(searchInput);
    refetch({ page: currentPage, search: searchInput }).then(() => {
      setIsSearching(false);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSubmit = async () => {
    setIsSumbit(true);
    try {
      const response = await axios.get(
        `https://bet-x-new.onrender.com/admin/viewUsers${searchTerm}?date=${date}`
      );

      if (response.data) {
        setSeconddata(response.data);
        console.log(response.data);
        setData(response.data.data);
        console.log(response.data.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setIsSumbit(false);
    }
  };

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleSendRequest = async () => {
    try {
      
      const response = await SendMail({
        email: mail,
        subject: mailHeader,
        message: mailBody,
      });
  

      if (response?.data) {
        console.log(response);
        toast.success(response?.data?.message, { autoClose: 1000 });
        setMail("");
        setMailHeader("");
        setMailBody("");
        handleModalClose(false);
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (newValue) => {
    setMailList(newValue);
  };

  /* map location code */

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  const LocationCell = ({ value }) => {
    const [location, setLocation] = React.useState("");
    const position = value ? value.split(",").map(Number) : null;
    console.log(location);
    React.useEffect(() => {
      if (
        !position ||
        position.length !== 2 ||
        isNaN(position[0]) ||
        isNaN(position[1])
      ) {
        setLocation("No data found");
        return;
      }

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position[0]}&lon=${position[1]}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.display_name) {
            setLocation(data.display_name);
          } else {
            setLocation("No data found");
          }
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
          setLocation("No data found");
        });
    }, [position]);

    if (
      !value ||
      !position ||
      position.length !== 2 ||
      isNaN(position[0]) ||
      isNaN(position[1])
    ) {
      return <div style={{ position: "relative" }}>No data found</div>;
    }

    return (
      <div style={{ position: "sticky" }}>
        {location === "No data found" ? (
          <span>No data found</span>
        ) : (
          <MapContainer
            center={[position[0], position[1]]}
            zoom={13}
            style={{ height: "100px", width: "250px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[position[0], position[1]]}>
              <Popup>{location}</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    );
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "s_no",
    },
    {
      Header: "Profile Img",
      accessor: "profileImg",
      Cell: (props) => {
        const imageUrl = props.value;
        return imageUrl ? (
          <img
            src={imageUrl}
            alt="Profile"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        ) : (
          <HiMiniUserCircle size={30} />
        );
      },
    },
    {
      Header: "User Name",
      accessor: "userName",
      Cell: (props) => {
        const userName = props.value;
        let phoneNumber = props.row.original.phoneNumber;

        if (phoneNumber.startsWith("+91")) {
          phoneNumber = phoneNumber.replace("+91", "");
        }

        return (
          <Link to={`/admin/user-details/${phoneNumber}`}>{userName}</Link>
        );
      },
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Referral Id",
      accessor: "referralId",
    },
    {
      Header: "Sports",
      accessor: "sport",
    },
    // {
    //   Header: "Location",
    //   accessor: "location",
    //   Cell: ({ value }) => {
    //     if (!value) {
    //       return <span>No data found</span>;
    //     }

    //     const position = value.split(',').map(Number);

    //     // Check if the position is valid
    //     if (position.length !== 2 || position.some(isNaN)) {
    //       return <span>No data found</span>;
    //     }

    //     // Print latitude and longitude separately in the console
    //     console.log('Latitude:', position[0]);
    //     console.log('Longitude:', position[1]);

    //     return (
    //       <MapContainer
    //         center={position}
    //         zoom={13}
    //         scrollWheelZoom={false}
    //         style={{ height: "70px", width: "70px" }}
    //       >
    //         <TileLayer
    //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         />
    //         <Marker position={position}>
    //           <Popup>{position.join(', ')}</Popup>
    //           <Tooltip>{position.join(', ')}</Tooltip>
    //         </Marker>
    //       </MapContainer>
    //     );
    //   }
    // },

    {
      Header: "Location",
      accessor: "location",
      Cell: LocationCell,
    },

    {
      Header: "Created At",
      accessor: "createdAt",
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), "dd-MM-yyyy hh:mm a");
        return <span>{formattedDateTime}</span>;
      },
    },
    {
      Header: "Updated At",
      accessor: "updatedAt",
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), "dd-MM-yyyy hh:mm a");
        return <span>{formattedDateTime}</span>;
      },
    },
  ];

  return (
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3 reduced-width-row">
          <Row className="boxShadow p-4 mb-4 mt-4  ">
            <Col className="d-flex flex-row justify-content-between mt-1">
              <h4 className="fw-bold "> User List</h4>
              <div>
                <Button
                  style={{ backgroundColor: "#6B78B7", border: "none" }}
                  className="p-2 m-1"
                  onClick={handleModalShow}
                >
                  <IoIosSend size={20} />
                  <span className="d-none d-md-inline"> Send Mail</span>
                </Button>
              </div>
            </Col>
          </Row>
          {/* <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "/> */}
          <Row className="  boxShadow p-4  mb-3 mt-3 d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-2 mx-2 " xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search UserList..."
                  className="form-control"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                {searchInput && (
                  <span className="input-group-text" onClick={handleClear}>
                    <BsX />
                  </span>
                )}
              </div>
            </Col>
            <Col
              className="d-flex flex-column text-center my-2 "
              xxl={2}
              xl={2}
              lg={2}
              sm={3}
              md={3}
            >
              <Button
                style={{ backgroundColor: "#6B78B7", border: "none" }}
                onClick={handleSearch}
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </Col>

            <Col className="my-2 mx-2 " xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </Col>
            <Col
              className="d-flex flex-column text-center my-2 "
              xxl={2}
              xl={2}
              lg={2}
              sm={3}
              md={3}
            >
              <Button
                onClick={handleSubmit}
                style={{ backgroundColor: "#6B78B7", border: "none" }}
                disabled={isSubmit}
              >
                {isSubmit ? "Submiting..." : "Sumbit"}
              </Button>
            </Col>
          </Row>

          <Row className="boxShadow p-4 mb-4 ">
            <BasicTable
              COLUMNS={COLUMNS}
              MOCK_DATA={data}
              currentPage={currentPage}
              startIndex={startIndex}
              endIndex={endIndex}
              setCurrentPage={setCurrentPage}
              totalItems={totalItems}
              totalPages={totalPages}
            />
          </Row>

          <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Send Mail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="recipientSelect">
                  <Form.Label>Email</Form.Label>
                  <Select
                    placeholder="Enter Mail"
                    onInputChange={handleInputChange}
                    options={(MailData?.data || []).map((data) => ({
                      value: data,
                      label: `${data}`,
                    }))}
                    value={MailData?.data?.find(
                      (option) => option.value === mail
                    )}
                    onChange={(selectedOption) => {
                      console.log("Selected input data:", selectedOption.value);
                      setMail(selectedOption.value);
                      console.log(mail);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="notificationHeader">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter  Subject"
                    value={mailHeader}
                    onChange={(e) => setMailHeader(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="notificationBody">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter  Message"
                    value={mailBody}
                    onChange={(e) => setMailBody(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
              <Button
                variant="primary"
                style={{ backgroundColor: "#6B78B7", border: "none" }}
                onClick={handleSendRequest}
              >
                Send Mail
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserList;
