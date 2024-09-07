import styled from "styled-components";

export const MainContainerListaDeDesejos = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`

export const TituloListaDesejos = styled.h1`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    font-size: 2rem;
`

export const ItemListaDeDesejos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    padding-bottom: 1rem;
    img{
        width: 100px;
    }
    h2{
        font-size: 1.2rem;
        font-weight: 500;
    }
`

export const ItemInfos = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
`