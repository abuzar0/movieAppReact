import React,{useState,useEffect} from 'react';
import './App.css';
import Card from './Card.js';
import Genres from './Genres';
import axios from 'axios';
import Pagination from './Pagenation';
import useGenres from './useGenres';
const Movie=()=>{
    const Api_Key="5311a32a6a1f13f5a3f4efb425535388";
    const[movies,setmovies]=useState([]);
    const [pages,setpages]=useState(1);
    const [numberofPages,SetnumberofPages]=useState();
    const[slectedGenres,setslectedGenres]=useState([]);
    const[genres,setgenres]=useState([]);
    const UrlForGenre=useGenres(slectedGenres);
    const setMoviesData= async()=>{
        const {data}= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&page=${pages}&with_genres=${UrlForGenre}`);
        // console.log(data);
        setmovies(data.results);
        SetnumberofPages(data.total_pages);
    }
    useEffect(()=>{
        setMoviesData();
        // console.log(UrlForGenre);
        // eslint-disable-next-line
    },[pages,UrlForGenre])
    return(
        <>
        <span className="text">Movies</span>
        <div className="chips">
            <Genres
            type="movie"
            slectedGenres={slectedGenres}
            setslectedGenres={setslectedGenres}
            genres={genres}
            setgenres={setgenres}
            setpage={setpages}
            />
        </div>
        <div className="card-container">
            { 
            movies.map((movie)=> <Card 
            key={movie.id}
            id={movie.id} 
            poster={movie.poster_path}
            title={movie.name || movie.title} 
            overview={movie.overview}
            media_type={"movie"}
            rating={movie.vote_average}
            /> )
            }
        </div>
        <div>
            {numberofPages > 1 &&
            <Pagination setpage={setpages} numberofPages={numberofPages}/>
            }
        </div>
      </>
    );
}
export default Movie;