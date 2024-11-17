import React, { useState } from "react";
// import "../../assets/styles/pages/LoginPage.css";

export default function FormLogin() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>Login Form</div>
    // <div className={`container ${isActive ? "active" : ""}`}>
    //   {/* Sign Up Form */}
    //   <div className="form-container sign-up">
    //     <form>
    //       <h1>Create Account</h1>

    //       <div className="social-icons">
    //         <a href="#" className="icon">
    //           <i className="fa-brands fa-google-plus-g" />
    //         </a>
    //         <a href="#" className="icon">
    //           <i className="fa-brands fa-facebook-f" />
    //         </a>
    //         <a href="#" className="icon">
    //           <i className="fa-brands fa-github" />
    //         </a>
    //         <a href="#" className="icon">
    //           <i className="fa-brands fa-linkedin-in" />
    //         </a>
    //       </div>

    //       <span>or use your email for registration</span>

    //       <input type="text" placeholder="Name" />
    //       <input type="email" placeholder="Email" />
    //       <input type="password" placeholder="Password" />

    //       <button type="submit">Sign Up</button>
    //     </form>
    //   </div>

    //   {/* Sign In Form */}
    //   <div className="form-container sign-in">
    //     <form>
    //       <h1>Sign In</h1>

    //       <div className="social-icons">
    //         <a href="#" className="icon">
    //           <i className="fa-brands fa-google-plus-g" />
    //         </a>
    //         <a href="#" className="icon">
    //           <i className="fa-brands fa-facebook-f" />
    //         </a>
    //         <a href="#" className="icon">
    //           <i className="fa-brands fa-github" />
    //         </a>
    //         <a href="#" className="icon">
    //           <i className="fa-brands fa-linkedin-in" />
    //         </a>
    //       </div>

    //       <span>or use your email password</span>

    //       <input type="email" placeholder="Email" />
    //       <input type="password" placeholder="Password" />

    //       <a href="#">Forgot Your Password?</a>
    //       <button type="submit">Sign In</button>
    //     </form>
    //   </div>

    //   {/* Toggle Container */}
    //   <div className="toggle-container">
    //     <div className="toggle">
    //       {/* Toggle Left Panel */}
    //       <div className="toggle-panel toggle-left">
    //         <h1>Welcome Back!</h1>
    //         <p>Enter your personal details to use all of site features</p>
    //         <button
    //           type="button"
    //           className="hidden"
    //           onClick={() => setIsActive(false)}
    //         >
    //           Sign In
    //         </button>
    //       </div>

    //       {/* Toggle Right Panel */}
    //       <div className="toggle-panel toggle-right">
    //         <h1>Hello, Friend!</h1>
    //         <p>
    //           Register with your personal details to use all of site features
    //         </p>
    //         <button
    //           type="button"
    //           className="hidden"
    //           onClick={() => setIsActive(true)}
    //         >
    //           Sign Up
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
