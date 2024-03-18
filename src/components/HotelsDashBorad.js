import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap"; // Import Button from react-bootstrap
import TtlHtlCards from './TtlHtlCards';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [ttlHtlData, setTtlHtlData] = useState();

  useEffect(() => {
    doFindHotelNames();
  }, []);

  const navigate = useNavigate();

  const handleShowBkdHtl = () => {
    navigate("/bkd-htl");
  };

  const handleLogout = () => {
    localStorage.removeItem("active_email");
    navigate("/");
  };

  async function doFindHotelNames() {
    var url = "https://hotelservice-be.onrender.com/ttl/find-ttlhtl-data";
    var response = await axios.post(url);
    // alert(JSON.stringify(response.data));
    setTtlHtlData(response.data);
  }

  return (
    <div className="text-center">
      <Row className="justify-content-md-center row-cols-3 gx-3" style={{ marginLeft: "50px" }}> {/* Add inline style to set left margin */}
        {ttlHtlData && ttlHtlData.map((data) => (
          <Col md={4} key={data.id} className="my-3"> {/* Add my-3 class to add vertical margin */}
            <TtlHtlCards id={data.id} name={data.name} />
          </Col>
        ))}
      </Row>
      <Button variant="primary" onClick={handleShowBkdHtl} className="m-2">Show Booked Hotels</Button> {/* Add variant prop and adjust styles */}
      <Button variant="danger" onClick={handleLogout} className="m-2">Logout</Button> {/* Add variant prop and adjust styles */}
    </div>
  );
};

export default Dashboard;
