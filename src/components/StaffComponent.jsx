import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getStaff, updateStaff } from '../services/StaffService'

const StaffComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

    useEffect(() => {

        if (id) {
            getStaff(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch((error) => {
                console.error(error);
            })
        }

    }, [id])

    function saveOrUpdateStaff(e) {
        e.preventDefault();

        if (validateForm()) {

            const staff = {firstName, lastName, email}
            console.log(staff);

            if (id) {
                updateStaff(id, staff).then((response) => {
                    console.log(response.data);
                    navigator('/staff');
                }).catch((error) => {
                    console.error(error);
                })
            } else {
                createStaff(staff).then((response) => {
                    console.log(response.data);
                    navigator('/staff');
                }).catch((error) => {
                    console.error(error);
                })
            }
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors}

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'First name is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Staff</h2>
        } else {
            return <h2 className='text-center'>Add Staff</h2>
        }
    }

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {
                    pageTitle()
                }
                <div className="card-body">
                    <form action="">
                        <div className="form-group mb-2">
                            <label htmlFor="" className="form-label">First Name:</label>
                            <input 
                                type="text"
                                placeholder='Enter Staff First Name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                onChange={(e) => setFirstName(e.target.value)}
                            >
                            </input>
                            {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="" className="form-label">Last Name:</label>
                            <input 
                                type="text"
                                placeholder='Enter Staff Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(e) => setLastName(e.target.value)}
                            >
                            </input>
                            {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="" className="form-label">Email:</label>
                            <input 
                                type="text"
                                placeholder='Enter Staff Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                            {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateStaff}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StaffComponent