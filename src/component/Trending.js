import React,{useState,useEffect} from 'react';
import './App.css';
import Card from './Card.js';
import axios from 'axios';
import Pagenation from './Pagenation'

const Trending = ()=>{
  const Api_Key="5311a32a6a1f13f5a3f4efb425535388";
    const[movies,setmovies]=useState([]);
    const [pages,setpages]=useState(1);
    const getData= async ()=>{
      const {data}= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${Api_Key}&page=${pages}`);
      // console.log(data);
      setmovies(data.results);
    }
    useEffect(()=>{
      getData();
      // eslint-disable-next-line
    },[pages])
    return(
        <>
        <span className="text">Trending</span>
        <div className="card-container">
            {  movies.length >0 &&
            movies.map((movie)=> <Card 
            key={movie.id}
            id={movie.id} 
            poster={movie.poster_path}
            title={movie.name || movie.title} 
            overview={movie.overview}
            media_type={movie.media_type}
            Date={movie.release_date}
            rating={movie.vote_average}/> )
          }
        </div>
        <div>
          <Pagenation
          setpage={setpages}
          />
        </div>
      </>
    );
}
export default Trending;