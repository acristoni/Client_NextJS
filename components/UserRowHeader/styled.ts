import styled from 'styled-components';

export const RowRowHeader = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
    margin: 1%;
    box-shadow: 5px 10px 18px #888888;

    @media (max-width: 1000px) {
        margin: 2%;
        margin-top: 4%;
    }
`;

export const ContainerRowHeader = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const TextRowHeader = styled.span`
    font-weight: 700;
    font-size: 36px;
`;