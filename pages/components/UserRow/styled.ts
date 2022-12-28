import styled from 'styled-components';

export const RowUser = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
    margin: 1%;
    box-shadow: 5px 10px 18px #888888;
    border-radius: 10px;

    :hover{
        width: 68%;
        background-color: lightgray;
        cursor: pointer;
    }
`;

export const ContainerUser = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TextUser = styled.span`
    font-weight: 400;
    font-size: 24px;

    :hover{
        font-weight: 700;
    }
`;