import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'

let socket;

const ChatRoom = ({user}) => {

    const room = "General";
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:8000';

    useEffect(() => {
        socket= io(ENDPOINT);
        console.log(socket)
        socket.emit('join', {name: user, room:room}, () => {

        });
        return () => {
            localStorage.removeItem('username')
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, user]);

    useEffect (() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault()
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    } 

    return (
        <div className="container">
            <div className="row">
                <label htmlFor="message"></label>
                <input 
                    id="message"
                    name="message"
                    value={message}
                    type="text"
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress = {e => e.key === 'Enter' && sendMessage(e)}
                />
            </div>
            <button onClick ={e => {localStorage.removeItem('username'); socket.emit("unconnect"); socket.off()}}>Déconnexion</button>
            
        </div>
    )
}

export default ChatRoom
