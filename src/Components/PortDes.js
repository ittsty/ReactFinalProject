import React from 'react'
import styled from 'styled-components'

function ProtDes({icon, title}) {
    return (
        <PortItemStyled >
            <h3>{title}</h3>
        </PortItemStyled >
    )
}

const PortItemStyled = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 2rem;
    }
`;

export default ProtDes