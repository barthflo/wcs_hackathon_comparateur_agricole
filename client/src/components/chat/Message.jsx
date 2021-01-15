import React, { Fragment } from 'react'

const Message = ({message : {user, text}, name}) => {

    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }
    return (
        <Fragment>
        {isSentByCurrentUser 
        ? 
        <div className="message-self alert alert-light d-flex flex-column align-items-end align-self-end w-75">
            <div className="message-box">
                <p className="message-text">{text}</p>
            </div>
            <small className="sent-text font-italic text-capitalize">{trimmedName}</small>
        </div>
        :
        <div className="message-other alert d-flex flex-column align-items-start align-self-start w-75">
            <div className="message-box">
                <p className="message-text">{text}</p>
            </div>
            <small className="sent-text font-italic text-capitalize">{user}</small>
        </div>
        }
        </Fragment>
    )
}

export default Message
