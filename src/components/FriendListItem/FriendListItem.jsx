import {
  FriendAvatar,
  FriendName,
  FriendStatus,
  Item,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <Item>
      <FriendStatus>{status}</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};
