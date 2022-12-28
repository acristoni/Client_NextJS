import styled from 'styled-components';

export const RowRepo = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
    margin: 1%;
    box-shadow: 5px 10px 18px #888888;
    border-radius: 10px;

    @media (max-width: 1000px) {
        margin: 2%;
    }

    :hover{
        width: 95%;
        background-color: lightgray;
        cursor: pointer;
    }


`;

export const ContainerRowRepo = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Text = styled.span`
    font-weight: 400;
    font-size: 18px;
    overflow-x: hidden;
    
    :hover{
        font-size: 24px;
    }
    @media (max-width: 1000px) {
        width: 100%;
        margin: 5px;
        text-align: center;
    }
`;