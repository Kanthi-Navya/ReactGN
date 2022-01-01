import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// import InputGroup from "react-bootstrap/InputGroup";
// import {FormGroup} from "react-bootstrap/Form";
// import {FormControl} from "react-bootstrap/Form";
import { Form, FormGroup } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Input from 'react-validation/build/input';


import { faCircle, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
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
            <>

              <InputGroup>
                <FormControl aria-label="Text input with radio button" />
                <InputGroup.Radio aria-label="Radio button for following text input " disabled="true"/>
                {/* <button className="btn" type="button">
                  <FontAwesomeIcon icon={faCircle} />
                </button> */}
              </InputGroup>
              <InputGroup>
                <FormControl aria-label="Text input with radio button" />
                {/* <InputGroup.Radio aria-label="Radio button for following text input " disabled="true"/> */}
                <button className="btn" type="button">
                  <FontAwesomeIcon icon={faEyeSlash} />
                </button>
              </InputGroup>
              {/* <Input value="" name='Id' placeholder="8 Digit Pin" className="login-input"/> */}
            </>
          </Row>
        </div>
      </Container>
    </div>
  );

}
export default Main;


