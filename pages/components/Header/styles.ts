import styled from 'styled-components';

export const ContainerHeader = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1%;
    box-shadow: 5px 10px 18px #888888;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const ContainerTextHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 60%;
    @media (max-width: 1000px) {
        margin-bottom: 8px;
    }
`;

export const ContainerLogo = styled.div`
    width: 30%;
    @media (max-width: 1000px) {
        width: 80%;
        margin: 8px 0;
    }
`

export const TextHeader = styled.span`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 1%;
`;

export const TextHeaderSmall = styled.span`
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 1%;
    text-align: justify;
`;