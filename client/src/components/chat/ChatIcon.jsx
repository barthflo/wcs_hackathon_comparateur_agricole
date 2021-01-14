import React from 'react'
import {BsFillChatQuoteFill} from 'react-icons/bs'

const ChatIcon = ({openChat}) => {
    return (
        <div onClick={(e => openChat())} className="chat-icon position-fixed p-4">
            <BsFillChatQuoteFill size = {"2em"}/>
        </div>
    )
}

export default ChatIcon
