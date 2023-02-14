import styled from '@emotion/styled';

export const Statistic = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #f0f1f0;
    background-color: #f5faf7;
    margin-top: 20px;
`;

export const Title = styled.h2`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 700;
    font-size: 40px;
    text-transform: uppercase;
    color: dimgray;
    margin: 0;
    padding: 20px;
    `;

export const StatList = styled.ul`
    list-style: none;
    display: flex;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    margin: 0;
    padding: 0;
    `;

export const Item = styled.li` 
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 3px;
    background-color: #f0f1f0;
    padding: 27.5px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 700;
    font-size: 23px;
    text-align: center;
    color: rgba(252, 252, 252, 252);
    `;

export const Label = styled.span` 
     color: rgba(0, 0, 0, 0.35);
     `;

export const Percentage = styled.span` 
     color: dimgray;
     `;

