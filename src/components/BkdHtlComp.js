import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import TtlHtlCards from "./TtlHtlCards";

const BkdHtlComp = () => {
  const [bkdHtlData, setBkdHtlData] = useState();
  const emailId = localStorage.getItem("active_email")

  useEffect(() => {
    doFindBkdHotelNames()
  }, [])

  async function doFindBkdHotelNames() {
    var url = "https://hotelservice-be.onrender.com/bkd/find-bkdhtl-data?email=" + emailId;
    var response = await axios.post(url);
    // alert(JSON.stringify(response.data));
    setBkdHtlData(response.data);
  }

  return (
    <>
      <center>
        <Row className="justify-content-md-center">
          <Col md={3}>
            {bkdHtlData && bkdHtlData.map((data) => (
              <Cards id={data.id} name={data.name} />
            )
            )}
          </Col>
        </Row>
      </center>
    </>
  );
};
export default BkdHtlComp;