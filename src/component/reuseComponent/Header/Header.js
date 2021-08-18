import react from 'react';
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';
import './Header.css';
const Header = ()=>{
    return(
        <>
        <span class="header" onClick={()=> window.scroll(0,0)}>
          Movies
          <MovieFilterOutlinedIcon style={{fontSize:"150%",color:"white"}} /> 
        </span>
      </>
    );
}
export default Header;