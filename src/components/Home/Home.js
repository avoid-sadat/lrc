import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css';




const Home = () => {
    const [educations,setEducation]=useState([]);

useEffect(()=>{
    fetch('./education.JSON')
        .then(res=> res.json())
        .then(data=>{
            setEducation(data)
        });
},[])
    return (
        <div>
            <div>
                <h3 className="service">Services</h3>
            </div>
            <div className="container">
            {
                educations.map(education=><Service 
                 key={education.id}
                   education={education}
                    ></Service>)
            }
            </div>
           
        </div>
    );
};

export default Home;