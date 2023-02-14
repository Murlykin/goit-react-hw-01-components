import PropTypes from 'prop-types';
import FriendListItem from 'components/friendlist/FriendListItem';
import {Friends} from 'components/friendlist/FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Friends >
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        ></FriendListItem>
      ))}
    </Friends >
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
