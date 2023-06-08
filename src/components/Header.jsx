import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/Header.css'  
function Header(props) {
    return (
        <div className="header">
          <div className="header-left">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="header_icon" width="60px" height="40px"/></Link> 
            <Link to="/movies/popular"><span>Popular</span></Link>
            <Link to="/movies/upcoming"><span>Upcoming</span></Link>
            <Link to="/movies/top_rated"><span>Top Rated</span></Link>
          </div>
            <div className="header-right">
                <AccountCircleIcon htmlColor="white"/>
            </div>
        </div>
    );
}

export default Header;