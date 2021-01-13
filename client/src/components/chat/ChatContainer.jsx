import React, { Fragment } from 'react'
import ChatIcon from './ChatIcon'
import './chat.css'

const ChatContainer = () => {
    return (
        <Fragment>
            <aside className = "chat-container d-flex position-absolute justify-content-end p-4">
                <p>Chat Content</p>
            </aside>
            <ChatIcon />
        </Fragment>
    )
}

export default ChatContainer
