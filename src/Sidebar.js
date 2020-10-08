import React from 'react'
import "./Sidebar.css"
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarChanel from './SidebarChanel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';



function Sidebar() {
    return (
        <div className="sidebar">
            

            <div className="sidebar__top">
                <h3>Cleaver Programmer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__chanels">
                <div className="sidebar_chanelsHeader">

                    <div className="sidebar_header">
                        <ExpandMoreIcon />
                        <h4>Test Chanels</h4>
                    </div>
                    <AddIcon className="sidebar__addChanels"/>

                </div>

                <div className="sidebar__chanelList">
                    <SidebarChanel />
                    <SidebarChanel />
                    <SidebarChanel />
                    <SidebarChanel />

                </div>

                



            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="Large"
                    />
                
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />

                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src = "https://avatars0.githubusercontent.com/u/64345702?s=460&u=029597a026d7bb18bac354eacb78efa1f1643bf9&v=4"/>
                <div className="sidebar__profileInfo">
                    <h3>My Name This</h3>
                    <p>ID:4568321</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicNoneIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                    
                </div>
            </div>

        </div>
    )
}

export default Sidebar
