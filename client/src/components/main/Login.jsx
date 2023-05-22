import { Formik } from 'formik'
import { MDBInput } from 'mdb-react-ui-kit'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useUserContext } from '../../context/UserProvider'

const Login = () => {
  
  const navigate = useNavigate()

  const {loggedIn, setLoggedIn} = useUserContext()

  const loginSubmit = async (formdata, { resetForm, setSubmitting }) => {
    console.log(formdata)

    setSubmitting(true)

    const res = await fetch('http://localhost:5000/user/auth', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status)

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login Successful'
      })
      const data = (await res.json());

      setLoggedIn(true);
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      resetForm()
      navigate('/user/userProfile');
    }
    else if (res.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email or Password is incorrect'
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong'
      })
    }

    setTimeout(() => {
      setSubmitting(false)
    }, 2000)
  }














  return (
    <div>
      <section className="vh-100 mt-5"
      >
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

              <div className="text-center mt-3">
                <h2>Login To Your Account</h2>
              </div>

              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                onSubmit={loginSubmit}>
                {
                  ({ handleSubmit, handleChange, values, isSubmitting }) => (

                    <form onSubmit={handleSubmit}>
                      <MDBInput label='Email' id='email' type='email' className='my-4' onChange={handleChange} value={values.email} />
                      <MDBInput label='Password' id='password' type='password' className='my-4' onChange={handleChange} value={values.password} />

                      <div className="d-flex justify-content-between align-items-center">
                        {/* Checkbox */}
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3"
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            Remember me
                          </label>
                        </div>
                        <a href="#!" className="text-body">
                          Forgot password?
                        </a>
                      </div>
                      <div className="text-center text-lg-start mt-4 pt-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                          style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                        >
                          Login
                        </button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                          Don't have an account?{" "}
                          <Link to="/main/signup" className="link-danger">
                            Register
                          </Link>
                        </p>
                      </div>
                    </form>

                  )
                }


              </Formik>





            </div>
          </div>
        </div>

      </section>


    </div>
  )
}

export default Login