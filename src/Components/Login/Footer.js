// const Footer = () => {
//   return (
//     <div>
//          <nav className="navbar navbar-expand-md container-fulid">
        
//           <div className="col-sm-12 col-md-4 col-lg-4">
//             <a className="navbar-brand" href="#">Tract</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//           </div>
//           <div className="col-sm-12 col-md-4 col-lg-4 collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item active" >
//                 <a className="nav-link" href="#">Category <span className="sr-only">(current)</span></a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Tract For Business</a>
//               </li>
//               <li className="nav-item ">
//                 <a className="nav-link" href="#">Teach on Tract</a>
//               </li>
//             </ul>

//           </div>

//           <div className="col-sm-12 col-md-4 col-lg-4">
//             <div className="row">
//               <div className="col">

//                 <div className="input-group">
//                   <input type="text" className="form-control" placeholder="Search ......" />
//                   <div className="input-group-append">
//                     <button className="btn" type="button">
//                       <FontAwesomeIcon icon={faSearch} />
//                     </button>
//                   </div>
//                 </div>

//               </div>
//               <div className="col">
//                 <button className="btn btn-success my-2 my-sm-0" type="signup">Sign up</button>
//               </div>
//             </div>
//           </div>
//           </nav>
//     </div>
    
//   )
// }
// export default Footer;




// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// function Header (props){
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
//   return (
//     <nav className="navbar navbar-expand-md container-fulid">

//       <div className="col-sm-2 col-md-2 col-lg-2">
//         <a className="navbar-brand topHead" href="#">Tract.</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
//           <span className="navbar-toggler-icon"></span>
//         </button>
//       </div>
//       <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent" className="col-sm-6 col-md-6 col-lg-6">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="#">Category</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Tract For Business</a>
//           </li>
//           <li className="nav-item ">
//             <a className="nav-link" href="#">Teach on Tract</a>
//           </li>
//         </ul>

//       </div>

//       <div className="col-sm-6 col-md-6 col-lg-6">
//         <div className="row">
//           <div className="col">

//             <div className="input-group">
//               <input type="text" className="form-control" placeholder="Search ......" />
//               <div className="input-group-append">
//                 <button className="btn" type="button">
//                   <FontAwesomeIcon icon={faSearch} />
//                 </button>
//               </div>
//             </div>

//           </div>
//           <div className="col">
//             <button className="btn-lg signupBtn" type="signup"><span className="signupBtn">Sign up</span></button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;