import React from 'react'
import { useDispatch } from 'react-redux'
import "./SidebarChanel.css"
import {setChanelInfo} from './features/appSlice'

function SidebarChanel({ id, chanelName}) {
    
    const dispatch = useDispatch()


    return( <div className="sidebarChanel" onClick={ () => dispatch
        (setChanelInfo({
            chanelId : id,
            chanelName : chanelName,
            })
        )
    }>
            <h4 >
                <span className="sidebarChanel__hash">#</span>{chanelName}
            </h4>
        </div>
    )
    
}

export default SidebarChanel
