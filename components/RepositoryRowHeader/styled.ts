import styled from 'styled-components';

export const RowRepoHeader = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
    margin: 2%;
    box-shadow: 5px 10px 18px #888888;
    border-radius: 5px;
    background-color: #e6e6e6; 
    
    @media (max-width: 700px) {
        margin-top: 5%;
    }
`;

export const ContainerRowRepoHeader = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const TextRepoHeader = styled.span`
    font-weight: 700;
    font-size: 26px;

    @media (max-width: 1000px) {
        margin: 10px;
    }
`;

export const TextRepoHeaderName = styled(TextRepoHeader)`
    margin-right: 22%;

    @media (max-width: 1000px) {
        margin-right: 0;
    }
`