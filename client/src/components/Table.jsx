import React from 'react';
import { Link } from 'react-router-dom';

const Table = (props) => {

    return (
        <div className="container">
            <Link to={"/new"}>add a pet to the shelter</Link>
            <p>These pets are looking for a good home</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.allPets.sort((a, b) => a.type < b.type ? -1 : 1).map((pet, i) =>
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/display/${pet._id}`}>details</Link> |
                                    <Link to={`/edit/${pet._id}`}>Edit</Link>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table