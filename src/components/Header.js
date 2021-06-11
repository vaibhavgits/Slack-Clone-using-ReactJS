//1. rfce using Extension 
import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutLineIcon from "@material-ui/icons/HelpOutline";


function Header() {
    return (
        <div className="header">
            <div className="header_left"> 
                {/* Avatar for loggin user and Time icon*/}
                <Avatar
                    className="header_avatar"
                    alt="Vaibhav"
                     
                />
                <AccessTimeIcon/>
            </div>
            <div className="header_search">
                {/* Search Icon */}
                <SearchIcon/>
                {/* in/put */}
                <input placeholder="Search Vaibhav"/>
            </div>
            <div className="header_right">
                {/* help icon */}
                <HelpOutLineIcon/> 
            </div>
        </div>
    )
}

export default Header
