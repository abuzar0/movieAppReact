import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import './App.css';
import Image from '../assets/noImage.jpg'
const handleDragStart = (e) => e.preventDefault();

const Gallery = ({id,type}) => {
    const Api_Key="5311a32a6a1f13f5a3f4efb425535388";
    const Img_Api="https://image.tmdb.org/t/p/original";
    const [Credit,setCredit]=useState([]);
    const GetData= async()=>{
        const {data}= await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${Api_Key}`);
        // console.log(data);
        setCredit(data.cast);
    }

    useEffect(()=>{
        GetData();
        // eslint-disable-next-line
    },[])
    const responsive={
        0:{
            items: 3,
        },
        500:{
            items: 5,
        },
        1024: {
            items: 7
        }
    }
    const items = Credit.map((e)=>(
        <div className="Credits">
       <img 
        src={e.profile_path ?`${Img_Api}/${e.profile_path}` : Image}
        className="creditImage"
        onDragStart={handleDragStart} />
        <b className="creditName">{e.name}</b>
        </div>
    ));
  return (
    <AliceCarousel
     mouseTracking
     items={items}
     autoPlay
     responsive={responsive}
     disableButtonsControls
     disableDotsControls
     infinite
       />
  );
}

export default Gallery;