import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from '../components/Table';

const IndexView = () => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then(response => { 
        setAllPets(response.data.results);
        })
        .catch(err => console.error(err));
    }, [allPets])

    return (
    <div className="container">
        <Table allPets={allPets}/>
    </div> 
    )
}

export default IndexView