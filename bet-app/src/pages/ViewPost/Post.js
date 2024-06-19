import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import BasicTable from "../../components/TablePaginationComponent";
import { useAddBulkPostMutation, useDeletePostMutation, useEditPostMutation, useGetPostQuery } from "../../redux/api/PostApi";
import Loader from "../../pages/Loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";
import { HiUserCircle } from "react-icons/hi";
// import ApprovedImage from "../../assets/images/approved.webp";
// import HoldImage from "../../assets/images/hold.webp";
// import RejectedImage from  "../../assets/images/rejected.webp";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaPlus } from "react-icons/fa";
import { FaFileImport } from "react-icons/fa";
import DeleteModel from "../../components/DeleteModel";
import { MdDelete } from "react-icons/md";



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
  const { id } = useParams();
  const [editId, setEditId] = useState(null);
  const [editShow, setEditShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  // const [showModal, setShowModal] = useState(false);
  // const [modalData, setModalData] = useState({ rowData: null, status: "" });
  const [importModalVisible, setImportModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); 
  const { data: postData, isLoading, refetch } = useGetPostQuery({ page: currentPage, search: searchTerm , id:id});
  const navigate = useNavigate();
  const [editPostData] = useEditPostMutation();
  const [deletePost] = useDeletePostMutation();
  const [AddBulkPostData] = useAddBulkPostMutation();


  


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


  const handleEditShow = (id) => {
    setEditId(id);
    setEditShow(true);
  };

  const handleEditClose = () => {
    setEditShow(false);
    setEditId(null);
  };

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };


  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };



  const handleDeletePost = async () => {
  
    try {
      const response = await deletePost(idToDelete);
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
      const response = await editPostData({
        id: editId,
        data: {
          status: selectedOption,
        },
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        handleEditClose();
        refetch(); // Refetch data after updating
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };
  // const handleEditData = async (rowData, status) => {
  //   const postId = rowData._id;

  //   try {
  //     const response = await editPostData({
  //       id: postId,
  //       data: {
  //         status: status,
  //       },
  //     });
      
  //     if (response?.data) {
  //       toast.success(response?.data?.message, { autoClose: 1000 });
  //     } else {
  //       toast.error(response?.error?.data.error, { autoClose: 1000 });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleShowModal = (rowData, status) => {
  //   setModalData({ rowData, status });
  //   setShowModal(true);
  // };

  // const handleConfirmAction = () => {
  //   handleEditData(modalData.rowData, modalData.status);
  //   setShowModal(false);
  // };

  // const handleCloseModal = () => setShowModal(false);



    // import modal function
  const handleOpenImportModal = () => {
    setImportModalVisible(true);
  };

  const handleCloseImportModal = () => {
    setImportModalVisible(false);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };





 const handleAddData = async () => {
    try {
       const response = await AddBulkPostData ({
        file: selectedFile,
       
        });
    
      if (response?.data) {
       
        setSelectedFile("")
        toast.success(response?.data?.message, { autoClose: 1000 });
        setImportModalVisible(false);
       
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
        Header: "ACTIONS",
        accessor: "action",
        Cell: (props) => {
          const rowIdx = props.row.original._id;
          return (
            <div className="d-flex align-items-center justify-content-center flex-row">
              <Button variant="warning" onClick={() => handleEditShow(rowIdx)}>
                <FaEdit />
              </Button>
              <Button variant="danger" className="ms-2" onClick={() => deleteHandleShow(rowIdx)}>
                <MdDelete />
              </Button>
            </div>
          );
        },
      },
    // {
    //   Header: "Actions",
    //   accessor: "action",
    //   Cell: ({ row }) => {
    //     const rowData = row.original;
    //     return (
    //       <div className="d-flex align-items-center justify-content-center flex-row">
    //         <img onClick={() => handleShowModal(rowData, 'Approved')} src={ApprovedImage} alt="Approved" style={{ width: '30px', height: '30px', marginRight: '15px' }} title="Approved" />
    //         <img onClick={() => handleShowModal(rowData, 'Hold')} src={HoldImage} alt="Hold" style={{ width: '30px', height: '30px', marginRight: '15px' }} title="Hold" />
    //         <img onClick={() => handleShowModal(rowData, 'Rejected')} src={RejectedImage} alt="Rejected" style={{ width: '30px', height: '30px', marginRight: '15px' }} title="Rejected" />
    //       </div>
    //     );
    //   }
    // }
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


                <Button
                  style={{ backgroundColor: "#6B78B7", border: "none" }}
                  className="p-2 m-1"
                  onClick={handleOpenImportModal}
                >
                  <FaFileImport size={20} /><span className="d-none d-md-inline">  Import</span>
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

          <DeleteModel
            YES={handleDeletePost}
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            DESCRIPTION="Are you sure want to delete this Post"
            DELETETITLE="Post"
          />
        </Container>
      ) : (
        <Loader />
      )}

      {/* Modal */}
      {/* <Modal show={showModal} onHide={handleCloseModal} centered>
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
      </Modal> */}


<Modal show={editShow} onHide={handleEditClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Withdraw Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Status:</Form.Label>
                  <Form.Control as="select" value={selectedOption} onChange={handleDropdownChange}>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Hold">Hold</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Closed">Closed</option>
                    <option value="Fixed">Fixed</option>

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



      <Modal show={importModalVisible} onHide={handleCloseImportModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" onChange={handleFileInputChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImportModal}>
            Cancel
          </Button>
          <Button style={{backgroundColor:"#6B78B7"}} onClick={handleAddData}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Post;
