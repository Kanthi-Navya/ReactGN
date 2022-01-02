import React from 'react';
import { Link } from 'react-router-dom';

const Footer=() => {

    return(
        <div className="footer">
            <div className="footer-left">
                <span>Privacy Policy</span>
                {/* <Link to="/" >Privacy Policy</Link> */}
            </div>
            <div className="footer-right">
                <span>Copyright</span>
                {/* <Link to="/">Copyright<span style={{color: 'rgb(114, 114, 114'}}>&#64;</span>Tract 2022</Link> */}
            </div>
        </div>
    );
}
export default Footer;