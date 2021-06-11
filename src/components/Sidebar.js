 import React from 'react'
 import "./Sidebar.css";
//  FiberManualRecordIcon will help to display green dot(online)
 import FiberManualRecordIcon  from '@material-ui/icons';
import CreateIcon from "@material-ui/icons/Create "

 function Sidebar() {
     return (
         <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>vaibhav123</h2>
                    <h3>
                    <FiberManualRecordIcon/>
                    Vaibhav
                </h3>
                </div>
                <CreateIcon/>
            </div>

         </div>
     )
 }
 
 export default Sidebar
 