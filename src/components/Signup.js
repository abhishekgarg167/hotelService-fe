import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// import { signupService } from "../services/user";

function Signup() {
  const [obj, doUpdateObj] = useState({ email: "", pwd: "" });
  const doUpdateBoth = (event) => {
    var { name, value } = event.target;
    doUpdateObj({ ...obj, [name]: value });
    // console.log(event.target.value)
  };

  async function doSignup() {
    var url = "https://hotelservice-be.onrender.com/user/signup-process";

    let formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }
    const res = await axios.post(url, formData);
    alert(res.data);
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-8 mt-3">
        <div className="row">
          <div className="col-md-8">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                value={obj.email}
                onChange={doUpdateBoth}
              />
            </FloatingLabel>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                name="pwd"
                value={obj.pwd}
                onChange={doUpdateBoth}
              />
            </FloatingLabel>
          </div>
        </div>

        <p>
          <input
            type="button"
            className="btn btn-primary"
            value="Signup"
            onClick={doSignup}
          />
        </p>
      </div>
    </div>
  );
}

export default Signup;