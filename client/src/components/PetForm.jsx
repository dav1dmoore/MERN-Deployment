import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const PetForm = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    });

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet/new", formInfo)
            .then(response => {
                console.log(response)
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.err.errors;
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return (
        <div className="container">
            <Link to={"/"}>back to Home</Link>
            <p>Know a pet needing a home?</p>
            <form onSubmit={submitHandler}>
                {
                    errors.map((err, i) => <p key={i} className="text-danger">{err}</p>)
                }
                <div className="mb-3 d-flex">
                    <label className="form-label">Pet Name:</label>
                    <input type="text" className='form-label' name='name' onChange={onChangeHandler} value={formInfo.name} />
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Type:</label>
                    <input type="text" className='form-label' name='type' onChange={onChangeHandler} value={formInfo.type} />
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Description:</label>
                    <input type="text" className='form-label' name='description' onChange={onChangeHandler} value={formInfo.description} />
                </div>
                <p>Skills (Optional)</p>
                <div className="mb-3 d-flex">
                    <label className="form-label">Skill 1:</label>
                    <input type="text" className='form-label' name='skillOne' onChange={onChangeHandler} value={formInfo.skillOne} />
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Skill 2:</label>
                    <input type="text" className='form-label' name='skillTwo' onChange={onChangeHandler} value={formInfo.skillTwo} />
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Skill 3:</label>
                    <input type="text" className='form-label' name='skillThree' onChange={onChangeHandler} value={formInfo.skillThree} />
                </div>
                <div className="mb-3 d-flex">
                    <button className='btn btn-primary'>Add Pet</button>
                </div>
            </form>
        </div>
    )
}

export default PetForm