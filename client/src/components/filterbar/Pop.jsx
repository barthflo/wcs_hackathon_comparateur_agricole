import styled from 'styled-components';

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
    width: 30%;
    transition: transform 0.3s ease-in-out;
        
`;

const Pop = ({ open }) => {
    return (
        <FORM open={open}>
            <h2>Filtres</h2>
            <label>Type de produit:
                <select>
                    <option>Blé</option>
                    <option>Avoine</option>
                </select>
            </label>
            <label>Ville: <input type="text"></input></label>
            <label>Surface agricole: 
                <select>
                    <option> 50 </option>
                    <option> 50 100 </option>
                    <option> 100 </option>
                    </select></label>
            <input type="submit" value="search"></input>
        </FORM>
    )
}

export default Pop;