import React from "react";
import { useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const {
    handleSubmit,
    isLogin,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    checkedIsLogin,
    signInUsingGoogle,
    handleResetPass,
    error,
    setUser,
    setError,
    processToLogin,
    email,
    password,
    processToRegister,
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // const history = useHistory();
  // handle redirecting using google login
  const googleSignIn = () => {
    signInUsingGoogle(location);
  };

  const handleEmailLogin = () => {
    processToLogin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(location.state?.from || "/");
        setUser(user);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  {/* Please {isLogin ? "Login" : "Register"} */ }

  return (

    <div className="login">
      <form className="inputs col-lg-4 mx-auto py-4 px-5 login-form" onSubmit={handleSubmit}>
        <h2 className="fw-bold text-2xl text-center text-indigo-900 mb-3">
          {/* Login into your account */}
            {isLogin ? "Login into your account" : "Register here"} 
         </h2>
        <div className="">
        {!isLogin && (
          <input className="login-input fw-bold"
            onChange={handleNameChange}
            type="text"
            placeholder="Name"
          />
        )}
        <br />
        <input className="login-input"
          onChange={handleEmailChange}
          type="email"
          placeholder="Email"
        />{" "}
        <br />
        <input className="login-input"
          onChange={handlePasswordChange}
          type="password"
          placeholder="********"
        />{" "}
        <br />
        <input
          onChange={checkedIsLogin}
          type="checkbox"
          id="registered"
          value="registered"
        />
        <label className="registered-link" htmlFor="registered"> Already Registered ?</label>
        <br />
        <div className="text-center">
          <p className="text-center text-danger">{error}</p>
          <div className="buttons text-center">
            {isLogin ? (
              <button
                onClick={handleEmailLogin}
                type="submit"
                className="btn__regular rounded-2"
              >
                Login
              </button>
            ) : (
              <button
                onClick={processToRegister}
                type="submit"
                className="btn__regular rounded-2"
              >
                Register
              </button>
            )}{" "}
            <br />
            {/* {isLogin && (
              <button
                type="submit"
                onClick={handleResetPass}
                className="btn__regular"
              >
                Forget Password
              </button>
            )} */}
             <button onClick={googleSignIn} className="btn__regular rounded-2">
           Google Sign In
          </button>
          </div>
        </div>

      </div>
      </form>
    




    </div> 
  );
};

export default Login;
