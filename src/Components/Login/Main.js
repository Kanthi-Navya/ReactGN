import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import { faApple, faFacebook, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Main() {
  return (
    <div>
      <h1 className="display-4 text-center mt-5 p-2 ">Login to Your Account</h1>
      <p className="text-center fs-4">Choose from 130,000 online video courses with new additions published every second month</p>


      <div className="container mt-5 pt-3 pb-4">
        <div className="row">
          {/* left user details and login button */}
          <div className="col-5">
            <div className="input-group input-group-lg pt-2">
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
              <span className="input-group-text" id="inputGroup-sizing-lg"> <FontAwesomeIcon icon={faCircle} /></span>
            </div>

            <div className="input-group input-group-lg pt-2">
              <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
              <span className="input-group-text" id="inputGroup-sizing-lg"> <FontAwesomeIcon icon={faLock} /></span>
            </div>
            <div className="d-grid gap-2 pt-2">

              <button type="button" className="btn btn-primary btn-lg">Login to your account</button>
            </div>

          </div>

          {/* or  */}
          <div className="col">
            <div className="text-center  align-middle">/</div>
          </div>

          {/* login through social */}
          <div className="col-5">
            <div className="d-grid gap-2 p-2">
              <button className="btn btn-primary text-start btn-lg" type="button">
              <FontAwesomeIcon icon={faGoogle} />
              <span className="fs-6 p-2">Sign in with Google</span>
              </button>
              <button className="btn btn-primary btn-lg text-start" type="button">
              
                 <FontAwesomeIcon icon={faFacebook} />
                 <span  className="fs-6 p-2">Sign in with Facebook</span>
              </button>
              <button className="btn btn-primary btn-lg text-start" type="button">
              <FontAwesomeIcon icon={faApple} />
              <span  className="fs-6 p-2">Sign in with Apple Account</span>
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 pt-3 ">
       <a href="/" className="">forgot password?</a> 
      </div>
    </div>
  );
}
export default Main;