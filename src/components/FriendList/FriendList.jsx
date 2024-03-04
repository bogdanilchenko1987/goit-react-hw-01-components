import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            status={isOnline}
          />
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
