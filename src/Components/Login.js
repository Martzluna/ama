import React, { useState } from "react";
import "../styles/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginFacebook, loginGoogle, loginWithEmailPassAsync } from "../Redux/actions/user";
import { ButtonFacebook, ButtonGoogle } from "../stylesComponents/loginStyles";
import googleIcon from "../assets/google.png";
import facebookIcon from "../assets/facebook.png";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = (values, { setSubmitting }) => {
    dispatch(loginWithEmailPassAsync(values));
    setSubmitting(false);
  }
  const handleGoogle = () => {
    dispatch(loginGoogle());
    navigate('/');
  }
  const handleFacebook = () => {
    dispatch(loginFacebook());
    navigate('/');
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="loginLogo"
        />
      </Link>



      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (values.password.length < 6) {
            errors.email = 'password must be min 6 characters';
          }
          return errors;
        }}
        onSubmit={handleLogin} >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (<div className="loginContainer">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <h5>E-mail</h5>
            <input
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <h5>Password</h5>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            <button type="submit" className="loginSignInButton" disabled={isSubmitting}>
              Sign In
            </button>
          </form>

          <p>
            By Signing-in you agree to the Amazon Clone Terms and conditions.
            Please see our privacy policy and other guidelines for further
            Information.
          </p>
          <button type="button" className="loginRegisterButton">
            Create your Amazon Account
          </button>
          {errors.password && touched.password && errors.password}
          <div className="socialMediaButtons">
            <ButtonFacebook type="button" onClick={handleFacebook}>
              <img width='20px' height='20px' src={facebookIcon} alt='Facebook Icon' />
            </ButtonFacebook>
            <ButtonGoogle type="button" onClick={handleGoogle}>
              <img width='20px' height='20px' src={googleIcon} alt='Google Icon' />
            </ButtonGoogle>
          </div>

        </div>
        )}
      </Formik>
    </div >

  );
}


export default Login;
