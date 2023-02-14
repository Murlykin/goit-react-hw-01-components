import styled from '@emotion/styled';

export const Friends = styled.ul`
   list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
export const FriendsItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    border-radius: 4px;
    border: 1px solid #f0f1f0;
    background-color: #f5faf7;
    margin-top: 20px;
    padding: 10px;
`;
export const FriendsAvatar = styled.img`
    margin: 0 auto;
    `;
export const FriendsName = styled.p`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 700;
    font-size: 20px;
    color: dimgray;
    `;


export const FriendStatus = styled.span`
  height: 12px;
  width: 12px;
  background-color: ${prop => {
        if (prop.color === "true") {
            return `green`
        } else {
            return `red`
        }
    }};
  border-radius: 50%;
  `;

