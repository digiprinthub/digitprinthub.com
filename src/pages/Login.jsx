import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar,SubNavBar } from "../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setErrorMessage(""); // Reset error message

    // Simulate backend processing
    setTimeout(() => {
      // Simulate a backend error
      const hasError = true; // Change to `false` to simulate success

      if (hasError) {
        setErrorMessage("Invalid email or password. Please try again.");
      } else {
        // Redirect or handle successful login
        console.log("Login successful");
      }

      setIsProcessing(false);
    }, 2000); // Simulate 2 seconds delay
  };

  return (
    <><Navbar /> 
    {/* <SubNavBar /> */}
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="floatingInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Login"}
                </button>
                {errorMessage && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {errorMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
