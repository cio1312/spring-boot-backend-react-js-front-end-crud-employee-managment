import react from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import empService from '../service/emp.service';
import { Link } from "react-router-dom";

const EditEmp = () => {
    const [emp, setEmp] = useState({
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        salary: ""
    });

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const data = useParams(); // will get id from url 
   console.log(data.id);

    useEffect(() => { // when component is loaded , useffect is called
        console.log("insdie useEffect =");
        empService
        .getEmpById(data.id)
        .then((res) => {
            console.log("res =",res);
            setEmp(res.data);
        }).catch((error) => {
            console.log(error);

        });

    },[]); // if you dont put [] then useeffect goes in continous loop and you wont be able to edit page


    const handleChange = (e) => { // on every entering of form , value is saved in the above object

        const valuegot = e.target.value;
        setEmp({ ...emp, [e.target.name]: valuegot });

    };


    const updateemp = (e) => {  // on form submit the control comes here
        e.preventDefault(); // to avoid refresh

        empService.updateEmp(emp.id, emp).then((res) => {
            navigate("/");
        }).catch((error) => {

            console.log(error);
        })

    };

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className="card-header text-center fs-3">Edit Employee Details


                            {msg && <p className='text-success'>{msg}</p>}</div>


                        <div className="card-body">
                            <form onSubmit={(e) => updateemp(e)}>
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


    )

}

export default EditEmp;