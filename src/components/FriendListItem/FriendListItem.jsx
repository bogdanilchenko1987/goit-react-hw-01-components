import PropTypes from 'prop-types';

import {
  FriendAvatar,
  FriendName,
  FriendStatus,
  Item,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <Item>
      <FriendStatus $status={status}>{status}</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
};
