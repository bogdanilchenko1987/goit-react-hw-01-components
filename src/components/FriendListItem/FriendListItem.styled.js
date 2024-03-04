import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  padding: 10px;
  /* margin-left: 10px; */
`;

export const FriendStatus = styled.span`
  position: absolute;
  right: 0;
  bottom: 20px;
  display: block;

  border-radius: 50%;
  width: 12px;
  height: 12px;
  background: ${props => (props.$status ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  width: 60px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
