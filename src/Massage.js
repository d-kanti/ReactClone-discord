import { Avatar } from '@material-ui/core'
import React from 'react'
import './massage.css'

function Massage() {
    return (
        <div className="massage">
            <Avatar />
            <div className="massage__info">
                <h4>
                    d-kanti 
                    <span className="massage__timestamp">Time</span>
                 </h4>
                 <p>This is the actual massage that is sent</p>
            </div>
        </div>
    )
}

export default Massage
