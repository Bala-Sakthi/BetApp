import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import BasicTable from ".././../../components/TablePaginationComponent";
import Header from ".././../../components/Header";
import Loader from ".././../../pages/Loader/Loader";
import { useGetNotificationQuery, useDeleteNotificationMutation, useAddNotificationMutation } from "../../../redux/api/GeneralNotificationApi";
import { toast } from "react-toastify";
import DeleteModel from ".././../../components/DeleteModel";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";

const GeneralNotification = () => {
 
  const [data, setData] = useState([]);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const { data: NotificationData, isLoading, refetch } = useGetNotificationQuery({ page: currentPage, search: searchTerm });
  const [deleteNotificationApi] = useDeleteNotificationMutation();
  const [addNotificationApi] = useAddNotificationMutation();

  useEffect(() => {
    if (NotificationData && NotificationData.data) {
      setData(NotificationData.data);
      setStartIndex(NotificationData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(NotificationData.pagination.totalItems);
      setEndIndex(NotificationData.pagination.endIndex);
      setTotalPages(NotificationData.pagination.totalPages);
    }
  }, [NotificationData, currentPage]);

  console.log(NotificationData);

  const handleNavigateAddForm = () => setShowAddModal(true);

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
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

  const deleteNotification = async () => {
    try {
      const response = await deleteNotificationApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddNotification = async () => {
    try {
      const response = await addNotificationApi ({
        title: title,
        body: body,
        image:image,
         
      });
      if (response?.data) {
       
        toast.success(response?.data?.message, { autoClose: 1000 });
        setTitle("");
        setBody("");
        setImage("");
        setShowAddModal(false)
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

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "s_no",
    },
    {
      Header: "Title",
      accessor: "title",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Sub Title",
      accessor: "body",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: (props) => {
        const imageUrl = props.value;
        return <img src={imageUrl} alt="img" style={{ maxWidth: '50px', maxHeight: '50px' }} />;
      },
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      width: "auto",
      minWidth: 100,
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), 'dd-MM-yyyy hh:mm a');
        return <span>{formattedDateTime}</span>;
      },
    },
    {
      Header: "Updated At",
      accessor: "updatedAt",
      width: "auto",
      minWidth: 100,
      Cell: ({ value }) => {
        const formattedDateTime = format(new Date(value), 'dd-MM-yyyy hh:mm a');
        return <span>{formattedDateTime}</span>;
      },
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      fixed: "right",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Button variant="danger" className="m-1" onClick={() => deleteHandleShow(rowIdx)}>
              <MdDelete />
            </Button>
          </div>
        );
      },
    },
  ];

console.log(title);
console.log(body);
console.log(image);
  
  return (
    <div>
      {!isLoading ? (
        <>
          <Container fluid className="my-4">
            <Row className="boxShadow p-4 mb-4 mt-4">
              <Col>
                <Header
                  ONCLICK={handleNavigateAddForm}
                  HEADING=" General Notification"
                  BUTTON_NAME="Add General"
                  headingClassName="text-center text-md-start m-md-4 m-xl-2"
                />
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
                    placeholder="Search notification..."
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
            <Row className="justify-content-center boxShadow p-4 mb-4">
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
          </Container>
          <DeleteModel
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            YES={deleteNotification}
            DESCRIPTION="Confirm to Delete this notification"
            DELETETITLE="Notification"
          />
          <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Add General Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBody">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddNotification}  style={{ backgroundColor: "#6B78B7", border: "none" }}>
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GeneralNotification;
