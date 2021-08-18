import React,{useState,useEffect} from 'react';
import Card from './Card.js';
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Pagination from './Pagenation';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
const Search=()=>{
    const[movies,setmovies]=useState([]);
    const [text,settext]=useState('');
    const [duplicatetext,setduplicatetext]=useState('');
    const [page,setpages]=useState(1);
    const [numberofPages,setnumberofPages]=useState();
    const Api_Key="5311a32a6a1f13f5a3f4efb425535388";
    const searchData= async()=>{
      const {data}= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&language=en-US&query=${text}&page=${page}&include_adult=false`);
      // console.log(data);
      setmovies(data.results);
      setnumberofPages(data.total_pages);
      setduplicatetext(text);
    }
    useEffect(()=>{
      window.scroll(0,0);
      searchData();
      // eslint-disable-next-line
      // console.warn(page);
    },[page])
    const Search=(e)=>{
        // console.log(e.target.value);
        settext(e.target.value);
    }
    const darkthem=createMuiTheme({
      palette:{
        type:'dark',
        primary:{
          main:'#fff',
        }
      }
    })

    return(
        <>
         <span className="text">SEARCH</span>
         <ThemeProvider theme={darkthem}>
        <div className="Search">
        <TextField
        style={{flex:1}}
        label="Search"
        variant="filled"
        type="search"
        onChange={Search}
        />
        <Button variant="outlined" style={{marginLeft:10}} startIcon={<SearchOutlinedIcon/>} color="success" size="large" onClick={searchData}>Search</Button>
        </div>
        </ThemeProvider>
        <hr></hr>
        <div className="card-container">
        {  movies.length >0 &&
            movies.map((movie)=>(<Card 
            key={movie.id}
            id={movie.id} 
            poster={movie.poster_path}
            title={movie.name || movie.title} 
            overview={movie.overview}
            media_type={"movie"}
            Date={movie.release_date}
            rating={movie.vote_average}/> )
            )
          }
          {
            duplicatetext &&
            movies.length < 1 && (
            <h2>No movies found</h2>
            )}
        </div>
        <div>
            {numberofPages > 1 &&
            <Pagination setpage={setpages} numberofPages={numberofPages}/>
            }
        </div>
      </>
    )
}
export default Search;