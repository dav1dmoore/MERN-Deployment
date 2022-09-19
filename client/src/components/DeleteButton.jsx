import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteButton = (props) => {
    const { id } = props
    const { petName } = props
    const navigate = useNavigate();

    const deletePet = (e, id) => {
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
            .then((response) => {
                navigate("/")
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="container">
            <button className="btn btn-warning" onClick={(e) => { deletePet(e, id) }}>
                Adopt {petName}
            </button>
        </div>
    )
}

export default DeleteButton