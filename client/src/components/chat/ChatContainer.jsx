import React, { Fragment, useState, useEffect } from 'react'
import ChatIcon from './ChatIcon'
import './chat.css'
import JoinChat from './JoinChat';
import ChatRoom from './ChatRoom';

const ChatContainer = ({className}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('username')));
    }, [])

    const handleUpdate = () => {
        if(localStorage.getItem('username') === null){
            setUser('')
        } else{
            setUser(JSON.parse(localStorage.getItem('username')));
        }
    }
    const openChat = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Fragment>
            <aside className = {"chat-container position-absolute d-flex flex-column justify-content-center align-item-center p-2" + (isOpen ? " open-chat" : " close-chat") + ` ${className}`}>
                {!user || user.length === 0 ?
                <JoinChat className={(!isOpen) ? " d-none close-chat" : ' open-chat'} updateRender={handleUpdate}/>
                :
                <ChatRoom user={user} updateRender = {handleUpdate}/>
                }
            </aside>
            <ChatIcon openChat={openChat}/>
        </Fragment>
    )
}

export default ChatContainer
