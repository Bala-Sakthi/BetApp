import React, { useState, useEffect } from "react";
import { Button, Col, Container, Modal, Row, Form } from "react-bootstrap";
import BasicTable from "../../components/TablePaginationComponent";
import BasicHeader from "../../components/BasicHeader";
import {
  useDeleteWithdrawrequestMutation,
  useEditWithdrawrequestMutation,
  useGetWithdrawRequestQuery,
} from "../../redux/api/WithdrawRequestApi";
import Loader from "../../pages/Loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";
import DeleteModel from "../../components/DeleteModel";
import { useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const WithdrawRequest = () => {
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
  const [deleteWithdrawrequestApi] = useDeleteWithdrawrequestMutation();
  const [updateWithdrawrequestApi] = useEditWithdrawrequestMutation();
  const { data: WithdrawRequestData, isLoading, refetch } = useGetWithdrawRequestQuery({
    page: currentPage,
    search: searchTerm,
    id: id,
  });

  useEffect(() => {
    if (WithdrawRequestData && WithdrawRequestData.data) {
      setData(WithdrawRequestData.data);
      setStartIndex(WithdrawRequestData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(WithdrawRequestData.pagination.totalItems);
      setEndIndex(WithdrawRequestData.pagination.endIndex);
      setTotalPages(WithdrawRequestData.pagination.totalPages);
    }
  }, [WithdrawRequestData, currentPage]);

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

  const deleteWithdrawrequest = async () => {
    try {
      const response = await deleteWithdrawrequestApi(idToDelete);
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
      const response = await updateWithdrawrequestApi({
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

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "s_no",
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Upi ID",
      accessor: "upiID",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Status",
      accessor: "status",
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
  ];

  return (
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3">
          <Row className="boxShadow p-4 mb-4 mt-4">
            <Col>
              <BasicHeader HEADING="WithdrawRequest" />
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
                  placeholder="Search WithdrawRequests..."
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
              className="d-flex flex-column text-center my-4"
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
            YES={deleteWithdrawrequest}
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            DESCRIPTION="Are you sure want to delete this Withdrawrequest"
            DELETETITLE="Withdrawrequest"
          />

          <Modal show={editShow} onHide={handleEditClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Withdraw Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Status:</Form.Label>
    <Form.Control as="select" value={selectedOption} onChange={handleDropdownChange}>
      <option value="">Select an option</option>
      <option value="Pending">Pending</option>
      <option value="Approved">Approved</option>
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
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default WithdrawRequest;
