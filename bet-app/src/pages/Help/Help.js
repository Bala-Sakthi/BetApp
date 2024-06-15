import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import BasicTable from "../../components/TablePaginationComponent";
import BasicHeader from "../../components/BasicHeader";
import DeleteModel from "../../components/DeleteModel";
import { useGetHelpQuery, useDeleteHelpMutation, useEditHelpMutation, useSendMailMutation } from "../../redux/api/HelpApi";
import { toast } from "react-toastify";
import Loader from "../../pages/Loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";

const Help = () => {
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [mailHeader, setMailHeader] = useState("");
  const [mailBody, setMailBody] = useState("");
  const [mail, setMail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const [editId, setEditId] = useState(null);
  const [editShow, setEditShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { data: getHelpData, isLoading, refetch } = useGetHelpQuery({ page: currentPage, search: searchTerm ,id:id});
  const[deleteStationApi] = useDeleteHelpMutation();
  const [EditHelpApi] = useEditHelpMutation();
  const [SendMail] = useSendMailMutation();

  console.log(getHelpData);

  useEffect(() => {
    if (getHelpData && getHelpData.data) {
      setData(getHelpData.data);
      setStartIndex(getHelpData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(getHelpData.pagination.totalItems);
      setEndIndex(getHelpData.pagination.endIndex)
      setTotalPages(getHelpData.pagination.totalPages);
    }
  }, [getHelpData,currentPage]);

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleEditShow = (id) => {
    setEditId(id);
    setEditShow(true);
  };

  const handleEditClose = () => {
    setEditShow(false);
    setEditId(null);
  };

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    setIsSearching(true);
    setSearchTerm(searchInput);
    refetch({ page: currentPage, search: searchInput }).then(() => {
      setIsSearching(false); 
    });
  };

  const handleModalShow = (email) => {
    setMail(email);
    setShowModal(true);
  };

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

  const deleteStation = async () => {
    try {
      const response = await deleteStationApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditData = async () => {
    try {
      const response = await EditHelpApi({
        id: editId,
        data: {
          status: selectedOption,
        },
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        handleEditClose();
        refetch();
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor:"s_no",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Message",
      accessor: "message",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Ticket Id",
      accessor: "ticketId",
    },
    {
      Header: 'Created At',
      accessor: 'createdAt',
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), 'dd-MM-yyyy hh:mm a');
        return <span>{formattedDateTime}</span>;
      },
    },
    {
      Header: "Updated At",
      accessor: "updatedAt",
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), 'dd-MM-yyyy hh:mm a');
        return <span>{formattedDateTime}</span>;
      },
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
        const email = props.row.original.email;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Button style={{ backgroundColor: "#6B78B7", border: "none",color:"white" }} variant="" onClick={() => handleModalShow(email)}>
              <IoSend />
            </Button>
            <Button variant="warning" className="ms-2" onClick={() => handleEditShow(rowIdx)}>
              <FaEdit />
            </Button>
            <Button variant="danger" className="ms-2" onClick={() => deleteHandleShow(rowIdx)}>
              <MdDelete />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3">
          <Row className="boxShadow p-4 mb-4 mt-4">
            <Col>
              <BasicHeader HEADING="Help" />
            </Col>
          </Row>
          <Row className="boxShadow p-3 mb-4 d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search Helps..."
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
            <Col className="d-flex flex-column text-center my-4" xxl={2} xl={2} lg={2} sm={3} md={3}>
              <Button
                style={{ backgroundColor: "#6B78B7", border: "none" }}
                onClick={handleSearch}
                disabled={isSearching}
              >
                {isSearching ? 'Searching...' : 'Search'}
              </Button>
            </Col>
          </Row>
          <Row className="boxShadow p-4 mb-4 d-flex flex-column align-items-center justift-content-center">
            <Col xs={12} lg={12} xl={12} xxl={12} md={12} className="table-responsive">
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
            </Col>
          </Row>
          <Modal show={editShow} onHide={handleEditClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Help</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Status:</Form.Label>
                  <Form.Control as="select" value={selectedOption} onChange={handleDropdownChange}>
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleEditClose}>
                Cancel
              </Button>
              <Button style={{ backgroundColor: "#6B78B7", border: "none" }} onClick={handleEditData}>
                Update
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Send Mail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="recipientSelect">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="notificationHeader">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Subject"
                    value={mailHeader}
                    onChange={(e) => setMailHeader(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="notificationBody">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter Message"
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
      <DeleteModel
        YES={deleteStation}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure you want to delete this Help"
        DELETETITLE="Help"
      />
    </div>
  );
};

export default Help;
