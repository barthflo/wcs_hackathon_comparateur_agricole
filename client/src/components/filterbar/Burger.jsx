import styled from 'styled-components';
import axios from 'axios';
import {useEffect, useState} from 'react';

const FORM = styled.form`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    flex-flow: column nowrap;
    background-color: #d6d6d6;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    padding: 24px;
    transition: transform 0.3s ease-in-out;
    height: 100vh; 
    width: 25%;
    border-left: 15px solid green; 

    @media screen and (max-width: 768px){
        width: 60%;
    }
`;

const Pop = ({ open }) => {

    const [product, setProduct] = useState("");
    const [farmSize, setFarmSize] = useState([]);
    const [type, setType] = useState([]);
    const [checkClient, setCheckClient] = useState(false);
    const [checkBuyer, setCheckBuyer] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/data`).then(res => setProduct(res.data))
    }, []);

    return (

        <FORM open={open}>
            <h2>Filtres</h2>

            <label className="checkFilter" value={type} onChange={e => setType(e.target.value)} onClick={() => setCheckClient(!checkClient)}>Agriculteur Client<input type="checkbox" value="client"></input></label>
            <label className="checkFilter" value={type} onChange={e => setType(e.target.value)} onClick={() => setCheckBuyer(!checkBuyer)}>Acheteur<input type="checkbox" value="buyers"></input></label>
            <label>Type de produit:
                <select value={product} onChange={e => setProduct(e.target.value)}>
                    <option value="ble">Blé</option>
                    <option value="avoine">Avoine</option>
                    <option value="triticale">Triticale</option>
                    <option value="orge">Orge</option>
                    <option value="mais">Maïs</option>
                    <option value="pois">Pois</option>
                    <option value="colza">Colza</option>
                    <option value="tournesol">Tournesol</option>
                    <option value="feverol">Feverol</option>
                </select>
            </label>
            <label>Surface d'exploitation (hectares):
                <select value={farmSize} onChange={e => setFarmSize(e.target.value)}>
                    <option value="little"> - 100 </option>
                    <option value="medium"> 100 - 200 </option>
                    <option value="big"> 200 + </option>
                </select>
            </label>
        </FORM>

    )
}

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 1;
    position: relative;
    
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#5a9449' : '#2a2a2a'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <Pop open={open} />
        </>
    )
}

export default Burger;