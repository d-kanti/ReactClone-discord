import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Massage from './Massage';



function Chat() {
    return (
        <div className="chat">
            
            <ChatHeader />

            <div className="chat__massages">
                <Massage />
                <Massage />
                <Massage />
            </div>

            <div className="chat__input">
                 <AddCircleIcon fontSize='large' />
                 <form action="">
                     <input type="text" placeholder = {'Massage #TESTCHANEL'}/>
                     <button type = "sublit" className='chat__inputButton'>Send Massage</button>
                 </form>
                 <div className="chat__inputIcons">
                    <CardGiftcardIcon/>
                    <GifIcon />
                    <EmojiEmotionsIcon />
                 </div>
            </div>

        </div>
    )
}

export default Chat
