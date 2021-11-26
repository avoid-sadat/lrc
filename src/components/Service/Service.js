import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    
        const{id,img,name,price}=props.education;
   
   
    const service={
        border: '3px solid #007b5e',
        padding:'5px',
        borderRadius:'10px'
    }
  
    return (
        <div style={service}>
          
               <div>
                <img className="img" src={img}/>
                </div>
        <div>
                <h1>{name}</h1>
               
                <p className="price">Price:{price}$</p>
            </div>
        </div>
    );
};

export default Service;