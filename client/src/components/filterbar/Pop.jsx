import styled from 'styled-components';
import Axios from 'axios';
import {useState} from 'react';

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
    width: fit-content;    
`;

const Pop = ({ open }) => {

    const [city, setCity] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.get(`http://localhost:8000/api/cities/:id`).then((response)=>{console.log(response)})
    }

    return (
        <FORM open={open} onSubmit={handleSubmit}>
            <h2>Filtres</h2>
            <label>Type de produit:
                <select>
                    <option>Choisir produit</option>
                    <option>Blé</option>
                    <option>Avoine</option>
                </select>
            </label>
            <Autocomplete
  id="combo-box-demo"
  options={top100Films}
  getOptionLabel={(option) => option.title}
  style={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
/>
            <label>Surface agricole: 
                <select>
                    <option value="undefine">Choisir</option>
                    <option> 50 </option>
                    <option> 50 100 </option>
                    <option> 100 </option>
                    </select></label>
            <input type="submit" value="search"></input>
        </FORM>
    )
}

export default Pop;