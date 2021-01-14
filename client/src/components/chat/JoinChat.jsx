import React, {useState} from 'react'
import LogoSvg from '../logo-svg/LogoSVG';

const JoinChat = ({className, updateRender}) => {

    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit=(e) => {
        e.preventDefault()
        if(name.length < 3){
            setError("Le nom doit faire au moins 3 charactères")
        } else{
            localStorage.setItem("username", JSON.stringify(name));
            updateRender(); 
        } 
    }

    return (
        <div className={"join-chat-card card w-100 h-50 align-items-center border-0" + className}>
            <form onSubmit={handleSubmit}>
            <div className="card-header">
                <LogoSvg />
                <h2 className="text-center">Bienvenue sur le chat!</h2>
            </div>
            <div className="card-body w-100 d-flex flex-column align-items-center justify-content-center">
                <label htmlFor="name" className="form-label">Entrez votre nom:</label>
                <input
                    className={"form-control" + (error.length>0 ? " is-invalid" : "") }
                    type="text"
                    id="name"
                    onChange={e => setName(e.target.value)}
                />
                {error.length >0 && <small className="invalid-feedback">{error}</small>}
                <button className="btn mt-3">Joindre le chat!</button>
            </div>  
            </form>    
        </div>
    )
}

export default JoinChat
