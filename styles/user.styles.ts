import styled from 'styled-components';

export const ContainerUser = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 10px 18px #888888;
`;

export const TextUser = styled.span`
    font-weight: 400;
    font-size: 24px;
    margin: 1%;
    overflow-x: hidden;
    width: 90%;
    text-align: center;
`;

export const TextUserHeader = styled(TextUser)`
    margin: 2%;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    overflow-x: hidden;
`;