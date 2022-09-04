import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import empService from '../service/emp.service';
import { Link } from "react-router-dom";

const Home = () => {

    const [emplist, setEmplist] = useState([]); // array list of emp objects
    const [msg, setmsg] = useState("");
    useEffect(() => {

        init();

    }, []);


    const deleteEmploy = (id) => {
        console.log("in delete", id);

        empService
            .deletetheEmp(id)
            .then((res) => {
                setmsg("deleted successfully");
                init(); // to refresh the page
            }).catch((error) => {
                console.log(error)

            });
    };

    const init = () => {
        empService.getAllEmp().then((res) => {
            console.log(res.data); // us to check
            setEmplist(res.data);
        }).catch((error) => {
            console.log(error);
        });

    }

    return (

        <div className='container'>
            <h1 className='text-center mt-4'>Welcome to Employee Managment</h1>
            {

                msg && <p className='text-center text-success'>{msg}</p>
            }

            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Sr.no</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    

                    {

                        emplist.map((e, num) => (

                            <tr>
                                <th scope='row'>{num + 1}</th>
                                <td>{e.firstname}</td>
                                <td>{e.lastname}</td>
                                <td>{e.email}</td>
                                <td>{e.address}</td>
                                <td>{e.salary}</td>
                                <td>
                                    <Link to={"editemployee/" + e.id} className='btn btn-sm btn-primary'>Edit</Link>
                                    <button onClick={() => deleteEmploy(e.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                                </td>
                            </tr>
                        ))}

                </tbody>
            </table>

        </div>

    );
};

export default Home;