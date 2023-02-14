import PropTypes from 'prop-types';
import {
  ProfileName,
  Descript,
  Avatar,
  Name,
  Taglocation,
  Stats,
  Item,
  LabelQuantity,
} from 'components/profile/Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileName>
      <Descript>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Taglocation>@{tag}</Taglocation>
        <Taglocation>{location}</Taglocation>
      </Descript>

      <Stats>
        <Item>
          <span>Followers</span>
          <LabelQuantity>{stats.followers}</LabelQuantity>
        </Item>
        <Item>
          <span>Views</span>
          <LabelQuantity>{stats.views}</LabelQuantity>
        </Item>
        <Item>
          <span>Likes</span>
          <LabelQuantity>{stats.likes}</LabelQuantity>
        </Item>
      </Stats>
    </ProfileName>
  );
};

export default Profile;
Profile.propTypes = {
  usrname: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
