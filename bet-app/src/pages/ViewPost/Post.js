import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import BasicTable from "../../components/TablePaginationComponent";
import { useEditPostMutation, useGetPostQuery } from "../../redux/api/PostApi";
import Loader from "../../pages/Loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";
import { HiUserCircle } from "react-icons/hi";
import ApprovedImage from "../../assets/images/approved.png";
import HoldImage from "../../assets/images/hold.png";
import RejectedImage from  "../../assets/images/rejected.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


const Post = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const [isSearching, setIsSearching] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ rowData: null, status: "" });
  const { data: postData, isLoading, refetch } = useGetPostQuery({ page: currentPage, search: searchTerm });
  const navigate = useNavigate();
  const [editPostData] = useEditPostMutation();

  


  const handleNavigateAddForm = () => navigate("/admin/add-post");

  useEffect(() => {
    if (postData && postData.data) {
      setData(postData.data);
      setStartIndex(postData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(postData.pagination.totalItems);
      setEndIndex(postData.pagination.endIndex);
      setTotalPages(postData.pagination.totalPages);
    }
  }, [postData, currentPage]);

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

  const handleEditData = async (rowData, status) => {
    const postId = rowData._id;

    try {
      const response = await editPostData({
        id: postId,
        data: {
          status: status,
        },
      });
      
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowModal = (rowData, status) => {
    setModalData({ rowData, status });
    setShowModal(true);
  };

  const handleConfirmAction = () => {
    handleEditData(modalData.rowData, modalData.status);
    setShowModal(false);
  };

  const handleCloseModal = () => setShowModal(false);

 
  const COLUMNS = [
    {
      Header: "ID",
      accessor:"s_no",
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: (props) => {
          const imageUrl = props.value;
          return imageUrl ? (
            <img src={imageUrl} alt="Profile" style={{ maxWidth: '50px', maxHeight: '50px' }} />
          ) : (
            <HiUserCircle  size={30} />
          );
        },
    },
    {
      Header: "Post Owner Image",
      accessor: "postOwnerImage",
      Cell: (props) => {
          const imageUrl = props.value;
          return imageUrl ? (
            <img src={imageUrl} alt="Profile" style={{ maxWidth: '50px', maxHeight: '50px' }} />
          ) : (
            <HiUserCircle  size={30} />
          );
        },
    },
    {
        Header: "Sports",
        accessor:"sport",
      },
    {
        Header: "User Name",
        accessor:"userName",
      },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    
    {
      Header: "Match Details",
      accessor: "matchDetails",
    },
    {
        Header: "Match Date",
        accessor: "matchDate",
      },
      {
        Header: "Bet Amount",
        accessor: "betAmount",
      },
      {
        Header: "Place Of Match",
        accessor: "placeOfMatch",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      

      {
        Header: "Result",
        accessor: "result",
        
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
        Header: 'Updated At',
        accessor: 'updatedAt',
        Cell: ({ value }) => {
          const formattedDateTime = format(new Date(value), 'dd-MM-yyyy hh:mm a');
          return <span>{formattedDateTime}</span>;
        },
      },
    {
      Header: "Actions",
      accessor: "action",
      Cell: ({ row }) => {
        const rowData = row.original;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <img onClick={() => handleShowModal(rowData, 'Approved')} src={ApprovedImage} alt="Approved" style={{ width: '30px', height: '30px', marginRight: '15px' }} title="Approved" />
            <img onClick={() => handleShowModal(rowData, 'Hold')} src={HoldImage} alt="Hold" style={{ width: '30px', height: '30px', marginRight: '15px' }} title="Hold" />
            <img onClick={() => handleShowModal(rowData, 'Rejected')} src={RejectedImage} alt="Rejected" style={{ width: '30px', height: '30px', marginRight: '15px' }} title="Rejected" />
          </div>
        );
      }
    }
  ];

  return (
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3">
          <Row className="boxShadow p-4 mb-4 mt-4">
            <Col className="d-flex flex-row justify-content-between mt-1">
              <h4 className="fw-bold ">Post</h4>
              <div>
                <Button
                  style={{ backgroundColor: "#6B78B7", border: "none" }}
                  className="p-2 m-1"
                  onClick={handleNavigateAddForm}
                >
                  <FaPlus size={20} /><span className="d-none d-md-inline"> Add Post</span>
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="boxShadow p-3 mb-4  d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search Posts..."
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
          <Row className="boxShadow p-4 mb-4">
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
        </Container>
      ) : (
        <Loader />
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to {modalData.status} this post?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button style={{backgroundColor:"#6B78B7"}} onClick={handleConfirmAction}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Post;
