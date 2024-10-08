import styled from "styled-components"

const StyledTittle = styled.h3`
    font-weight: 500;
    color: #000;
    opacity: 70%;
    margin: 0.5rem 0rem;
`

function TituloFinalizarCompra({children}){
    return(
        <StyledTittle>{children}</StyledTittle>
    )
}

export default TituloFinalizarCompra