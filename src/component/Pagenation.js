import React from 'react';
import {createMuiTheme,ThemeProvider} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';


const darkTheme=createMuiTheme({
    palette:{
        type:'dark',
    },
})
export default function BasicPagination({setpage,numberofPages=10}) {
    const handlepage=(page)=>{
        setpage(page);
        // console.log(page);
        window.scroll(0,0);
    }
  return (
    <div 
    style={{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        marginTop:14,
      }}>
        <ThemeProvider theme={darkTheme}>
              <Pagination 
                count={numberofPages} 
                color="primary" 
                onChange={(e,val)=>handlepage(val)}
                hideNextButton
                 hidePrevButton
                 size="large"
                 variant="text"
                 />
        </ThemeProvider>
      
    </div>
  );
}