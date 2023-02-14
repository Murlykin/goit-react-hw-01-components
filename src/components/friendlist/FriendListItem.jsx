import PropTypes from 'prop-types';
import {FriendsItem, FriendsAvatar, FriendsName, FriendStatus } from 'components/friendlist/FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsItem>
            {/* <span className={isOnline ? css.online : css.offline}></span> */}
            <FriendStatus color={isOnline.toString()}></FriendStatus>
            <FriendsAvatar src={avatar} alt="User avatar" width="48" />
            <FriendsName>{name}</FriendsName>
        </FriendsItem>
    );
};

export default FriendListItem;

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
