import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const PetDisplay = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(response => {
                console.log(response)
                setFormInfo(response.data.results)
            })
            .catch(err => console.log("Edit page get request: ", err))
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pet/update/${id}`, formInfo)
            .then(response => {
                console.log("Edit put request", response)
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.err.errors;
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    console.log(errorResponse[key].message)
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }


    return (
        <div className="container">
            <Link to={"/"}>back to home</Link>
            <p>Details about: {formInfo.name}</p>
            <DeleteButton id={id} petName={formInfo.name} />
            <div>
                <p>Pet Type: {formInfo.type}</p>
                <p>Description: {formInfo.description}</p>
                <p>Skills: <br />{formInfo.skillOne}<br />{formInfo.skillTwo}<br />{formInfo.skillThree}</p>

            </div>
        </div>
    )
}

export default PetDisplay