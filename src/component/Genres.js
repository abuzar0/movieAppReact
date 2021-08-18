import React, { useEffect } from "react";
import Chip from '@material-ui/core/Chip';
import axios from "axios";
const Genres=({
    type,
    slectedGenres,
    setslectedGenres,
    genres,
    setgenres,
    setpage,
})=>{
    const Api_Key="5311a32a6a1f13f5a3f4efb425535388";
    const FetchData = async()=>{
       const {data}=await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${Api_Key}`);
    //    console.log(data);
       setgenres(data.genres);
    }
    const handleClick = (genre) => {
        // alert(genre);
        setslectedGenres([...slectedGenres,genre]);
        setgenres(genres.filter((g)=>{ return g.id !== genre.id}));
        setpage(1);
      };
      const handleRemove = (genre) => {
        setslectedGenres(slectedGenres.filter((e)=> e.id !== genre.id));
        setgenres([...genres,genre]);
        // console.log(genre);
      };
    useEffect(()=>{
        FetchData();
        // eslint-disable-next-line
    },[])
    return(
        <>
        <div style={{padding:"6px 0"}}>
        {
                slectedGenres && slectedGenres.map((genre)=>
                <Chip
                 label={genre.name} 
                 style={{margin:3}} 
                 size="medium"
                 color="primary"
                 key={genre.id}  
                 clickable
                 onDelete={()=>{handleRemove(genre)}}
                 />
                )
        }
             {
                genres && genres.map((genre)=>
                <Chip
                 label={genre.name} 
                 style={{margin:3}} 
                 color="secondary"
                 size="medium"
                 key={genre.id}  
                 clickable
                 onClick={()=>handleClick(genre)}/>
                 
                )
            }

        </div>
        </>
    )
}
export default Genres;