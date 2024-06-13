import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useGetDashboardQuery } from "../../redux/api/DashboardApi";
import Loader from "../Loader/Loader";
import TableComponents from "../../components/TableComponent";
import { Link } from "react-router-dom";
import { PiUserListBold } from "react-icons/pi";
import { MdFeedback } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
// import { PiTrainRegionalFill } from "react-icons/pi";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { FaStreetView } from "react-icons/fa";
import { format } from "date-fns";
import { HiMiniUserCircle } from "react-icons/hi2";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';






const Dashboard = () => {
  const { data, error, isLoading } = useGetDashboardQuery();

 

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const {
    totalUsers,
    totalFeedbacks,
    totalWithdrawRequests,
    totalIssues,
    totalPosts,
    recentFiveUsers= [],
    recentFiveWithdrawRequests = [],
  } = data.data;




  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
  
    
  const LocationCell = ({ value }) => {
    const [location, setLocation] = React.useState('');
    const position = value ? value.split(',').map(Number) : null;
  console.log(location);
    React.useEffect(() => {
      if (!position || position.length !== 2 || isNaN(position[0]) || isNaN(position[1])) {
        setLocation('No data found');
        return;
      }
  
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position[0]}&lon=${position[1]}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.display_name) {
            setLocation(data.display_name);
          } else {
            setLocation('No data found');
          }
        })
        .catch(error => {
          console.error('Error fetching location:', error);
          setLocation('No data found');
        });
    }, [position]);
  
    if (!value || !position || position.length !== 2 || isNaN(position[0]) || isNaN(position[1])) {
      return <div style={{ position: 'relative' }}>No data found</div>;
    }
  
    return (
      <div style={{ position:"sticky" }}>
        {location === 'No data found' ? (
          <span>No data found</span>
        ) : (
          <MapContainer center={[position[0], position[1]]} zoom={13} style={{ height: '80px', width: '100px' }}>
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
        accessor: (d, i) => i + 1,
        minWidth: 10,
      },
      {
        Header: "Profile Img",
        accessor: "profileImg",
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
        Header: "User Name",
        accessor:"userName",
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
        Header: "Sport",
        accessor: "sport",
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: LocationCell,
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

  const COLUMNSS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
      minWidth: 10,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Upi Id ",
      accessor: "upiID",
    },
    {
      Header: " Amount",
      accessor: "amount",
    },
    {
      Header: "Status ",
      accessor: "status",
    },
    {
      Header: 'Created At',
      accessor: 'createdAt',
      Cell: ({ value }) => {
        if (!value) {
          return <span>Invalid Date</span>;
        }
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
    <Container fluid>
      <Row className="mt-4 mx-2">
        <Col className="boxShadow p-4">
          <h4 className="fs-4 fw-bolder">Dashboard</h4>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} sm={6} lg={4} className="mb-3" style={{textDecoration:"none",color:"inherit"}}>
          <Link to="/admin/user-list" className="link-unstyled">
            <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <PiUserListBold size={45} style={{color:"#6B78B7"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Users Count</div>
                  <h3 className="fs-8 fw-bolder">{totalUsers}</h3>
                  <div className="fs-14">Total Number of Users</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/feedback" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <MdFeedback size={45} style={{color:"#6B78B7"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Feedback Count</div>
                  <h3 className="fs-8 fw-bolder">{totalFeedbacks}</h3>
                  <div className="fs-14">Total Number of Feedbacks</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/withdraw-request" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <BiMoneyWithdraw size={45} style={{color:"#6B78B7"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Withdraw Requests</div>
                  <h3 className="fs-8 fw-bolder">{totalWithdrawRequests}</h3>
                  <div className="fs-14">Total Number of Requests</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/post" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <FaStreetView size={45} style={{color:"#6B78B7"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Total Posts</div>
                  <h3 className="fs-8 fw-bolder">{totalPosts}</h3>
                  <div className="fs-14">Total Number of Posts</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/issue" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <AiOutlineIssuesClose size={45} style={{color:"#6B78B7"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Total Issues</div>
                  <h3 className="fs-8 fw-bolder">{totalIssues}</h3>
                  <div className="fs-14">Total Number of Issues</div>
                </div>
              </div>
            </p>
          </Link>
        </Col>

        {/* <Col xs={12} sm={6} lg={4} className="mb-3">
          <Link to="/admin/metro-train" className="link-unstyled">
          <p className="p-3 boxShadow">
              <div className="d-flex align-items-center">
              <PiTrainRegionalFill size={45} style={{color:"#6B78B7"}}/>

                <div className="ms-3">
                  <div className="fs-5 fw-bolder">Total Metro Trains</div>
                  <h3 className="fs-8 fw-bolder">{totallyMetroTrains}</h3>
                  <div className="fs-14">Total Number of Metro Trains</div>
                </div>
              </div>
            </p>
          </Link>
        </Col> */}
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={6} lg={12} className="mb-3 ">
        <p className="p-5  boxShadow ">
            <h4 className="fs-4 mb-4 fw-bolder text-start">New User Join</h4>
          
              <TableComponents COLUMNS={COLUMNS} MOCK_DATA={recentFiveUsers} />
            
          </p>
        </Col>

        <Col xs={12} md={6} lg={12} className="mb-3  ">
        <p className="p-5 boxShadow">
            <h4 className="fs-4 mb-4 fw-bolder text-start">New Withdraw Request</h4>
          
              <TableComponents COLUMNS={COLUMNSS} MOCK_DATA={recentFiveWithdrawRequests} />
           
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
