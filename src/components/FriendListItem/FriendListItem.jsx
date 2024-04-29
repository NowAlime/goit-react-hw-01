import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";
export function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img className={css.avatar} src={avatar} alt="User avatar" width="80" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;