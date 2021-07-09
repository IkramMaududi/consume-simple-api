import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

/**
 * 
 * first name + last name
 * telephone
 * email address
 * country
 * picture
 */
const App = () => {
    const [dataFromAPI, setdataFromAPI] = useState([]);
    useEffect( () => {
        const url = 'https://randomuser.me/api/',
		      params = { results : 20 };

        const getData = async () => {
            await Axios
                    .get(url, { params })
                    .then(res => {
						setdataFromAPI(res.data.results);
						console.log(res.data.results);
					})
					.catch(err => console.error('There was an error!', err))
        };
        getData();
    }, []);

    //* process received data

	return (
		<div className="App">
			<h1>hellosd</h1>
		</div>
	);
};

export default App;
