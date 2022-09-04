import React from 'react';
import { useEffect, useState } from "react";
import empService from '../service/emp.service';

const Addemployee = () => {

    const [emp, setEmp] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        salary: ""
    });

    const [msg, setMsg] = useState("");
    const handleChange = (e) => { // on every entering of form , value is saved in the above object

        const valuegot = e.target.value;
        setEmp({ ...emp, [e.target.name]: valuegot });

    };


    const submitEmp = (e) => {  // on form submit the control comes here
        e.preventDefault(); // to avoid refresh

        empService           // is object of the class
            .saveEmp(emp)  // calls this method with object emp that we defined above that already has value during form filling
            .then((res) => {
                setMsg("EMPLOYEE ADDED SUCCESSFULLY");
                setEmp({              // to clear form after success submission
                    firstname: "",
                    lastname: "",
                    email: "",
                    address: "",
                    salary: ""
                });
            })
            .catch((error) => {
                console.log(error);
            });


    };


    return (

        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className="card-header text-center fs-3">Add Employee


                            {msg && <p className='text-success'>{msg}</p>}</div>


                        <div className="card-body">
                            <form onSubmit={(e) => submitEmp(e)}>
                                <div className="mb-3">
                                    <label> First name:</label>
                                    <input type="text" className='form-control' name='firstname' value={emp.firstname} onChange={(e) => handleChange(e)} />
                                </div>

                                <div className="mb-3">
                                    <label> Last name:</label>
                                    <input type="text" className='form-control' name='lastname' value={emp.lastname} onChange={(e) => handleChange(e)} />
                                </div>

                                <div className="mb-3">
                                    <label>  Email:</label>
                                    <input type="email" className='form-control' name='email' value={emp.email} onChange={(e) => handleChange(e)} />
                                </div>

                                <div className="mb-3">
                                    <label>  Address:</label>
                                    <input type="text" className='form-control' name='address' value={emp.address} onChange={(e) => handleChange(e)} />
                                </div>

                                <div className="mb-3">
                                    <label>  Salary:</label>
                                    <input type="number" className='form-control' name='salary' value={emp.salary} onChange={(e) => handleChange(e)} />
                                </div>

                                <div className='text-center'>
                                    <button className='btn btn-success'>Submit</button>
                              
                            
                                </div>

                            </form>
                        </div>



                    </div>
                </div>

            </div>

        </div>

    );

}

export default Addemployee;