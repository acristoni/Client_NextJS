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
    margin-bottom: 1%;
`;

export const TextUserHeader = styled(TextUser)`
    margin-top: 2%;
    font-weight: 700;
    font-size: 36px;
`;