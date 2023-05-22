import { Formik } from 'formik'
import { MDBInput } from 'mdb-react-ui-kit'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SignUp = () => {

  const navigate = useNavigate()

  const signUpForm = async (formdata, { resetForm }) => {
    console.log(formdata)
    const result = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(result.status)
    if (result.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Registered Successfully'
      })
      resetForm()
      navigate('/user/userProfile');
    }
  }
















  return (
    <>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://www.cdotrends.com/sites/default/files/AI%20Race.jpg")'
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        cpassword: '',
                        createdAt: new Date()
                      }}
                      onSubmit={signUpForm}
                    >
                      {
                        ({ handleSubmit, handleChange, values }) => (
                          <form onSubmit={handleSubmit}>

                            <MDBInput label='Your Name' id='name' type='text' className='my-4' onChange={handleChange} value={values.name} />
                            <MDBInput label='Your Email' id='email' type='email' className='my-4' onChange={handleChange} value={values.email} />
                            <MDBInput label='Password' id='password' type='password' className='my-4' onChange={handleChange} value={values.password} />
                            <MDBInput label='Confirm Password' id='cpassword' type='password' className='my-4' onChange={handleChange} value={values.cpassword} />


                            <div className="form-check d-flex justify-content-center mb-5">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="form2Example3cg"
                              />
                              <label className="form-check-label" htmlFor="form2Example3g">
                                I agree all statements in{" "}
                                <a href="#!" className="text-body">
                                  <u>Terms of service</u>
                                </a>
                              </label>
                            </div>
                            <div className="d-flex justify-content-center">
                              <button type="submit" className="btn btn-lg btn-block text-white" style={{ backgroundColor: '#039014 ' }}>register</button>
                            </div>
                            <p className="text-center text-muted mt-5 mb-0">
                              Have already an account?{" "}
                              <Link to="/main/login" className="fw-bold text-body">
                                <u>Login here</u>
                              </Link>
                            </p>
                          </form>
                        )
                      }

                    </Formik>





                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default SignUp