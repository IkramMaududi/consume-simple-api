import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

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

	return (
        <>
            {dataFromAPI.exist ? (
                <div className="Portfolio">
                    {dataFromAPI.map((val, index) => {
                        return (
                            <div key={index} class="movie-element">
                                <div class="movie-element__image">
                                    <img src={val.picture.thumbnail} alt="profile-pict" width="300" height="400"/>
                                </div>
                                <div class="movie-element__info">
                                    <div className="attribute">
                                        <h2>Name</h2>
                                        <h2>Email</h2>
                                        <h2>Telephone-1</h2>
                                        <h2>Telephone-2</h2>
                                        <h2>Country</h2>
                                    </div>
                                    <div className="semicolon">
                                        <h2>:</h2>
                                        <h2>:</h2>
                                        <h2>:</h2>
                                        <h2>:</h2>
                                        <h2>:</h2>
                                    </div>
                                    <div className="value">
                                        <h2>{val.name.title} {val.name.first} {val.name.last}</h2>
                                        <h2>{val.phone}</h2>
                                        <h2>{val.cell}</h2>
                                        <h2>{val.email}</h2>
                                        <h2>{val.location.country}</h2>
                                    </div>
                                    {/* <p>rating</p> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div id="top" className="fullSize">
                    Wait for a while
                </div>
            )}
        </>

	);
};

export default App;
