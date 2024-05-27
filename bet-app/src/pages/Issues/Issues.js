import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import BasicTable from "../../components/TablePaginationComponent";
import BasicHeader from "../../components/BasicHeader";
import DeleteModel from "../../components/DeleteModel";
import { useGetIssueQuery, useDeleteIssueMutation } from "../../redux/api/IssuesApi";
import { toast } from "react-toastify";
import Loader from "../../pages/Loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";
import { HiMiniUserCircle } from "react-icons/hi2";


const Issue = () => {
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
  const { data: getIssueData, isLoading, refetch } = useGetIssueQuery({ page: currentPage, search: searchTerm });
  console.log(getIssueData);
  const[deleteStationApi] = useDeleteIssueMutation();


  useEffect(() => {
    if (getIssueData && getIssueData.data) {
      setData(getIssueData.data);
      setStartIndex(getIssueData.pagination.startIndex);
      setCurrentPage(currentPage);
      setTotalItem(getIssueData.pagination.totalItems);
      setEndIndex(getIssueData.pagination.endIndex)
      setTotalPages(getIssueData.pagination.totalPages);

    }
  }, [getIssueData,currentPage]);

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

  const COLUMNS = [
    {
      Header: "ID",
      accessor:"s_no",
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Subject",
      accessor: "subject",
    },
    {
      Header: "Message",
      accessor: "message",
    },
    {
      Header: "ScreenShot Images",
      accessor: "screenshotImg",
      Cell: (props) => {
        const imageUrl = props.value;
        return imageUrl ? (
          <img src={imageUrl} alt="Profile" style={{ maxWidth: '50px', maxHeight: '50px' }} />
        ) : (
          <HiMiniUserCircle  size={30} />
        );
      },
    },
    {
        Header: "Status",
        accessor: "status",
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

  return (
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3">
        <Row className="boxShadow p-4 mb-4 mt-4">
            <Col>
            <BasicHeader HEADING="Issues" />
            </Col>
          </Row>
          {/* <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "/> */}
          <Row className=" boxShadow p-3 mb-4 d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search Issues..."
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
            <Col  className="d-flex flex-column text-center my-4"
            xxl={2}
            xl={2}
            lg={2}
            sm={3}
            md={3}>
              <Button
                style={{ backgroundColor: "#6B78B7", border: "none" }}
                onClick={handleSearch}
                disabled={isSearching} 
              >
                {isSearching ? 'Searching...' : 'Search'}
              </Button>
            </Col>
          </Row>
          <Row className="  boxShadow p-4 mb-4 d-flex flex-column align-items-center justift-content-center">
              <Col
                xs={12}
                lg={12}
                xl={12}
                xxl={12}
                md={12}
                className="table-responsive"
              >
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
      ) : (
        <Loader />
      )}
      <DeleteModel
        YES={deleteStation}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure you want to delete this Issue"
        DELETETITLE="Issue"
      />
    </div>
  );
};

export default Issue;
