import React, { useEffect, useState } from 'react'
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
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice'
import db,{auth} from './firebase'

function Sidebar() {
    const user = useSelector(selectUser)
    const [chanels,setChanels]=useState([]);

    useEffect(() => {
        db.collection('chanels').onSnapshot(snapshot => (
            setChanels(snapshot.docs.map(doc =>({
                id : doc.id,
                chanel:doc.data(),
            })))
        ))
    }, [])

    const handelAddChanel = () => {
        const chanelName = prompt("Enter the New Chanel Name")
        if(chanelName){
            db.collection('chanels').add({
                chanelName : chanelName
            })
        }
    }

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
                    <AddIcon onClick={handelAddChanel} className="sidebar__addChanels"/>

                </div>

                <div className="sidebar__chanelList">
                    {chanels.map(({id,chanel})=>(
                        <SidebarChanel 
                        key={id} 
                        id={id}
                        chanelName={chanel.chanelName} 
                        />
                    ))}

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
                <Avatar onClick= {() => auth.signOut() }src ={user.photo} className='the__avatar' />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>ID:{user.uid.substring(0,7)}</p>
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
