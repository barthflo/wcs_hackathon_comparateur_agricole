import React from 'react'
import {BsFillChatQuoteFill} from 'react-icons/bs'

const AccordionIcon = ({openChat}) => {
    return (
        <div onClick={(e => openChat())} className="accordion-icon position-fixed p-4">
            <BsFillChatQuoteFill size = {"2em"}/>
        </div>
    )
}

export default AccordionIcon
