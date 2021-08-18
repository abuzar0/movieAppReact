import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position:'fixed',
    bottom:0,
    backgroundColor:'#2d313a',
    zindex:'100',
  },
  selected: {
    color: "#00bcd4",
    },
});

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history=useHistory();
  useEffect(()=>{
    if(value === 0) history.push('/');
    else if(value === 1) history.push('/Movie');
    else if(value ===2) history.push('/Search');
      // console.log(value);
      // eslint-disable-next-line
  },[value]);

  return (
    <>   
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);}}
      showLabels={false}
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} 
      style={{color:"white"}} 
      classes={{
        selected: classes.selected
      }}
      />
      <BottomNavigationAction label="Movies" icon={<MovieIcon />}  style={{color:"white"}}
      classes={{
        selected: classes.selected
      }}
      />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} style={{color:"white"}}
      classes={{
      selected: classes.selected
    }} />
    </BottomNavigation>
    </>
  );
}