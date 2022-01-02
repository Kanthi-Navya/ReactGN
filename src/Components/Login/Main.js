import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Link from 'react-router-dom';
import { Form, FormGroup } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Google from '../../images/Google.svg';
import facebook from '../../images/facebook.svg';
import apple from '../../images/apple.svg';
import { faCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Main() {
  const [state, setState] = useState({
    passwd: "false"
  });

  const [userDetails, setUserDetails] = useState ({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    console.log(e, "text--onchange");
    setUserDetails({
      email: e.target.value,
      password: e.target.value
    })
  }

  const handleClick = (e) => {
    console.log(e);
    setState({
      passwd: !state.passwd
    })
    console.log(state.passwd, "password");
    console.log(userDetails.password, "user password");
  }
  return (
    <div>
      <Container>
        <div className="loginHeading">
          <Row>
            <h1>Login to Your Account</h1>
            <span className="subHeadLogin">Choose from 130,000 online video courses with new additions published every second month</span>
          </Row>
        </div>
        <div>
          <Row>
            <Col sm={5}>
              <InputGroup className="login_group">
                <FormControl placeholder="Teacher / Student ID" onChange={handleChange} />
                <InputGroup.Text >
                  <button className="btn" type="button">
                    <FontAwesomeIcon icon={faCircle} />
                  </button>
                  {/* <InputGroup.Radio aria-label="Radio button for following text input"/> */}
                </InputGroup.Text>
              </InputGroup>
              <InputGroup className="login_group">
                <FormControl placeholder="8 Digit Pin" type="password" onChange={handleChange}  defaultValue={setUserDetails.password}/>
                <InputGroup.Text>
                  <button className="btn" type="button" onClick={handleClick}>
                    {state.passwd ? <FontAwesomeIcon icon={faEyeSlash} /> :  <FontAwesomeIcon icon={faEye} />}

                  </button>
                </InputGroup.Text>
              </InputGroup>
              <Button className="loginBtn btn-lg">Login to your account </Button>
            </Col>
            <Col sm={2} xl={1} className="separator">/</Col>
            <Col sm={5}>
              <InputGroup className="login_group ">
                <Button className="loginBtns btn-lg">
                  <img src={Google} alt="G" />
                  <span>Sign in with Google</span>
                </Button>
              </InputGroup>
              <InputGroup className="login_group ">
                <Button className="loginBtns btn-lg">
                  <img src={facebook} alt="f" />
                  <span>Sign in with Facebook</span>
                </Button>
              </InputGroup>
              <Button className="loginBtns btn-lg">
                <img src={apple} alt="apple" />
                <span>Sign in with Apple Account</span>
              </Button>
            </Col>
          </Row>

          <Row>
            <div style={{ marginTop: '7%' }}>
              <div className="forgotPwd"><a href="/">Forgot Password?</a></div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );

}
export default Main;


