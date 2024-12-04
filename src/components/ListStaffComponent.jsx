import React, { useEffect, useState } from 'react'
import { listStaff } from '../services/StaffService'
import { useNavigate } from 'react-router-dom'

const ListStaffComponent = () => {

    const navigator = useNavigate();

    const [staff, setStaff] = useState([])

    useEffect(() => {
        getAllStaff();
    }, [])

    function getAllStaff() {
        listStaff().then((response) => {
            setStaff(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewStaff() {
        navigator('/add-staff')
    }

    function updateStaff(id) {
        navigator(`/edit-staff/${id}`)
    }

    function removeStaff(id) {
        console.log(id);

        deleteStaff(id).then((response) => {
            getAllStaff
        }).catch((error) => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Staff</h2>
        <button className='btn btn-primary mb-2' onClick={addNewStaff}>Add Staff</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    staff.map(staff =>
                        <tr key={staff.id}>
                            <td>{staff.id}</td>
                            <td>{staff.firstName}</td>
                            <td>{staff.lastName}</td>
                            <td>{staff.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateStaff(staff.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeStaff(staff.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListStaffComponent