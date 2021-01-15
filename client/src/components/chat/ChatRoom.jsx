import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import {AiOutlineSend} from 'react-icons/ai'
import {RiRadioButtonLine} from 'react-icons/ri'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'

let socket;

const ChatRoom = ({user, updateRender}) => {

    const room = "Salon Général";
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:8000';

    useEffect(() => {
        socket= io(ENDPOINT);
        console.log(socket)
        socket.emit('join', {name: user, room:room}, () => {

        });
    }, [ENDPOINT]);

    useEffect (() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const disconnect = (e) => {
        localStorage.removeItem('username');
        socket.emit('unconnect');
        socket.off();
        updateRender();
    }

    const sendMessage = (e) => {
        e.preventDefault()
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    } 

    return (
        <div className="chat-room container p-0 h-100 d-flex flex-column justify-content-end align-items-center">
            <div className="row info-bar flex-column flex-nowrap justify-content-center px-2">
                <h2 className = 'text-light text-uppercase mb-0 w-100'>{room}</h2>
                <div className="name d-flex align-items-center">
                    <RiRadioButtonLine 
                        className="mr-1 status-icon" 
                        size={"1.2em"} 
                        color={"#5a9449"} 
                        onClick={disconnect}/>
                    <p className="font-italic text-light text-capitalize w-100 mb-0">{user}</p>
                </div>
            </div>
            <div className="row display-zone p-1 my-2 position-relative">
                <ScrollToBottom className="h-100 position-absolute" style={{ bottom: 0}}>
                    {messages.map((message, index) => <div className="d-flex flex-column message" key={index}><Message message={message} name={user}/></div>)}
                </ScrollToBottom>
            </div>
            <div className="row input-zone d-flex align-items-center py-1 mb-2 border-top w-100 align-self-center">
                <label htmlFor="message" className="d-none">Message Input</label>
                <input 
                    className = "form-control col-10 mx-2 font-italic"
                    id="message"
                    name="message"
                    value={message}
                    type="text"
                    placeholder="Type a message"
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress = {e => e.key === 'Enter' && sendMessage(e)}
                />
                <button className="send-icon-container btn col-1 position-relative d-flex align-items-center" onClick = {e => sendMessage(e)}>
                    <AiOutlineSend  size={"1.6em"}/>
                </button>
            </div>            
        </div>
    )
}

export default ChatRoom
