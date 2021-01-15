import React from 'react'
import {GiWheat} from 'react-icons/gi'
import './accordion.css'

const AccordionIcon = ({openChat}) => {
    return (
        <div onClick={(e => openChat())} className="accordion-icon position-fixed p-4">
            <GiWheat size = {"2em"}/>
        </div>
    )
}

export default AccordionIcon
