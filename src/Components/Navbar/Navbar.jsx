import React,{useState} from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';


const Navbar = ({setSideNavbarFunc,sideNavbar}) => {
  const [userPic,setUserpic]=useState("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg")
  const [navbarModal,setNavbarModal] = useState(false);

  function  handleClickModel(){
    setNavbarModal(prev => !prev)
  }
  const sideNavbarFunc=()=>{
    setSideNavbarFunc(!sideNavbar)
  }

  return (
    <>
     <div className="navbar">
     <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color: "white" }} />
        </div>
        <Link to="/" className="navbar_youtubeImg">
        <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage' />
        <div className='navbar_utubeTitle'>YouTube</div>
        </Link>
        </div>
      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input type="text" placeholder='Search' className='navbar_searchBoxInput' />
        </div>
        <div className="navbar_searchIconBox">
        <SearchIcon sx={{fontSize:"28px", color:"white"}}/>
        </div>

         <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
          </div>
      </div>
     
      <div className="navbar-right">
        {/* <MoreVertIcon sx={{ color: "white" ,cursor:"pointer",fontSize:"30px"}}/> */}
        <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
      <img onClick={handleClickModel} src={userPic} className='navbar-right-logo' alt="Logo" />
      
      {
        navbarModal &&
      <div className="navbar-modal">
        <div className="navbar-modal-option">Profile</div>
        <div className="navbar-modal-option">Logout</div>
        <div className="navbar-modal-option">Login</div>
      </div>
      }
      
       </div> 
      
      </div>
    </>
  )
}
export default Navbar