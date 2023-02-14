import styled from '@emotion/styled';

export const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #f0f1f0;
  background-color: #f5faf7;
  margin-top: 20px;
`;

export const Descript = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const Avatar = styled.img`

    display: flex;
    max-width: 50%;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
`;

export const Name = styled.p`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 700;
    font-size: 40px;
    color: dimgray;
    margin: 0;
`;

export const Taglocation = styled.p`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 700;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.35);
    margin: 0;
`;


export const Stats = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
`; 
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #f0f1f0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 3px;
    padding: 40px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 700;
    font-size: 23px;
    text-align: center;
    color: rgba(0, 0, 0, 0.35);
`;
export const LabelQuantity = styled.span`
    color: dimgray;
`; 
