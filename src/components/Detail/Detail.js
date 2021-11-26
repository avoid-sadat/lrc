import React, { useEffect, useState } from 'react';
import './Detail.css'

const Detail = () => {
    const[details,setDetails]=useState([])
    useEffect(()=>{
        fetch('./details.JSON')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div>
            {
                details.map(detail=><div className="container">
                    <div>
                        <img className="img" src={detail.img} alt="" />
                        <p className="price">Price:{detail.price}$</p>
                    </div>
                    <div>
                    <h3 className="name">{detail.name}</h3>
                    <p className="des">Dsecription{detail.des}</p>
                    
                    </div>
                </div>)
            }
        </div>
    );
};

export default Detail;