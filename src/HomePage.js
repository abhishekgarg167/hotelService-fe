import React, { useEffect } from "react";
import { Row, Col, Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import Cards from "./components/Cards";
import axios from "axios";

const HomePage = () => {
    return (
        <>
            <div className="bg-light p-4"> {/* Add a light background color to the whole page */}
                <h1 className="text-center my-4">Welcome to Hotel Booking Website</h1> <br /><br />

                <Row className="justify-content-md-center" style={{ marginLeft: "80px" }}>
                    <Col md={4}>
                        <Cards id="Find Hotels" name={'Explore our platform for an extensive selection of accommodations, ensuring you find the perfect stay for your needs.'} bg="primary" text="white" /> {/* Add a primary background color to the card */}
                    </Col>
                    <Col md={4}>
                        <Cards id="SignUp/Login" name={'Join our community to make your booking experience seamless and enjoyable.'} bg="warning" text="white" /> {/* Add a warning background color to the card */}
                    </Col>
                    <Col md={4}>
                        <Cards id="Book Hotels" name={'Discover top-rated accommodations and secure your reservation in just a few clicks.'} bg="danger" text="white" /> {/* Add a danger background color to the card */}
                    </Col>
                </Row>
            </div>
        </>
    );
};
export default HomePage;
