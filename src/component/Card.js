import React from 'react';
import './App.css';
import Badge from '@material-ui/core/Badge';
import Model from './Model';
import Image from '../assets/noImage.jpg'
const Img_Api="https://image.tmdb.org/t/p/original";
const Card=({id,media_type,overview,rating,poster,title,Date})=>{
    return(
            <Model type={media_type} id={id}>
            <Badge badgeContent={rating} color={'secondary'}/>
                <img class="card-img-top" src={poster ?`${Img_Api + poster}` : Image} alt={'poster not avaiable'+title} />
                    <b className="card-Title">{title}</b>
            </Model>
    );
}
export default Card;