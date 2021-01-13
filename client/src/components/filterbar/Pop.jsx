import styled from 'styled-components';

const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    
    li {
        margin: 18px 10px;
        color: white;
    }

    flex-flow: column nowrap;
    background-color: green;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 40%;
    transition: transform 0.3s ease-in-out;

    @media screen and (max-width: 768px){
        bottom:0;
        left:0;
        top: auto;
        rigth: auto;
        transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
    }
        
`;

const Pop = ({ open }) => {
    return (
        <UL open={open}>
            <li>Test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
        </UL>
    )
}

export default Pop;