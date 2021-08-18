import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import  './Mode.css';
import Gallery from './Carousel';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      width:"90%",
      height:"80%",
    backgroundColor:"#515261",
    border: '1px solid #282c34',
    color:"white",
    borderRadius:10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function ContantModal({children,type,id}) {
  const classes = useStyles();
  const [open, setOpen] =useState(false);
  const Api_Key="5311a32a6a1f13f5a3f4efb425535388";
  const Img_Api="https://image.tmdb.org/t/p/original";
  const [content,setcontent]=useState();
  const [video,setvideo]=useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const GetData=async()=>{
      const{data}=await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${Api_Key}`);
      // console.warn(data);
      setcontent(data);
  }
  const GetVedio=async()=>{
    const{data}=await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${Api_Key}`);
    // console.log(data);
    setvideo(data.results[0]?.key);
}
  useEffect(()=>{
    GetData();
    GetVedio();
    // eslint-disable-next-line
  },[])
  return (
      <>
      <div className="card"
      style={{cursor:"pointer"}}
      color="inherit"
      onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            {content &&(
          <div className={classes.paper}>
            <div className="contentModel">
                <img  className="contentModel__portrait" alt={content.name||content.title} src={`${Img_Api}/${content.poster_path}`}/>
                <img  className="contentModel__landscape" alt={content.name||content.title} src={`${Img_Api}/${content.poster_path}`}/>
                <div className="content_about">
                    <span className="contenttitle">
                        {content.name||content.title}(
                            {(
                                content.frist_air_date ||
                                content.release_date||
                                "-------"
                            ).substring(0,4)}
                        )
                    </span> 
                    {content.tagline && (
                        <i className="tagline">{content.tagline}</i>
                    )}
                    <span className="contentDescription">
                        {content.overview}
                      </span>
                    <div >
                      <Gallery  type={type} id={id} />
                    </div>
                    <hr></hr>
                    <Button 
                    variant="contained"
                    startIcon={<YouTubeIcon/>}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                    >
                        watch the trailer
                    </Button>
                </div>
            </div>
          </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}