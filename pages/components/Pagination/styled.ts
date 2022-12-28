import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: white;
    cursor: pointer;
`;

export const PageNormal = styled.button`
    margin-right: 42px;
    font-size: 24px;
    height: 42px;
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
    cursor: pointer;

    :hover {
        background-color: orange;
        border-radius: 50%;
        border: none;
    }
`;

export const PageActive = styled(PageNormal)`
    color: white;
    background-color: #F06531;
    border-radius: 50%;
    border: none;
`;