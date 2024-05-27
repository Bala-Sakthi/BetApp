import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BasicTable from "../../components/TablePaginationComponent";
import BasicHeader from "../../components/BasicHeader";
import { useGetUserListQuery } from "../../redux/api/UserListApi";
import Loader from "../../pages/Loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";
import { format } from "date-fns";
import { HiMiniUserCircle } from "react-icons/hi2";
import axios from "axios";
import { Link } from "react-router-dom";


const UserList = () => {

  const [data, setData] = useState([]);
  const [seconddata,setSeconddata]=useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItem] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const[date,setDate]= useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isSubmit, setIsSumbit] = useState(false); 
  const { data: UserListData, isLoading ,refetch } = useGetUserListQuery({ page: currentPage, search: searchTerm });


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
      setEndIndex(UserListData.pagination.endIndex)
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
    }
    finally {
      setIsSumbit(false);
    }
  };
  
  

  const COLUMNS = [
    {
      Header: "ID",
      accessor: "s_no",
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
          <Link to={`/admin/user-details/${phoneNumber}`}>
            {userName}
          </Link>
        );
      }
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
    {
      Header: "Location",
      accessor: "location",
    },
    {
      Header: "Profile Img",
      accessor: "profileImg",
      Cell: (props) => {
        const imageUrl = props.value;
        return imageUrl ? (
          <img src={imageUrl} alt="Profile" style={{ maxWidth: '50px', maxHeight: '50px' }} />
        ) : (
          <HiMiniUserCircle size={30} />
        );
      },
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
  ];
  
  return (
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3">
          <Row className="boxShadow p-4 mb-4 mt-4">
            <Col>
            <BasicHeader HEADING="User List" />
            </Col>
          </Row>
          {/* <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "/> */}
          <Row className=" boxShadow p-4  mb-3 mt-3 d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
           
           
           
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
           <Col  className="d-flex flex-column text-center my-2 "
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
           <Col  className="d-flex flex-column text-center my-2 "
           xxl={2}
           xl={2}
           lg={2}
           sm={3}
           md={3}>
             <Button
 onClick={handleSubmit}
 style={{ backgroundColor: "#6B78B7", border: "none" }}
 disabled={isSubmit} 
 >
   {isSubmit ? 'Submiting...' : 'Sumbit'}
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
     
    </div>
  );
};

export default UserList;
