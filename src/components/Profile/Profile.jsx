import css from "./Profile.module.css";
import PropTypes from "prop-types";



export const Profile = ({ name, tag, location, image, stats }) => {
    const { followers, views, likes } = stats;
  
    return (
      <div className={css.container}>
        <div className={css.info}>
          <img className={css.avatar} src={image} alt="User" width="150" />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
        <ul className={css.list}>
          <li className={css.listItem}>
            <span>Followers</span> <span>{followers}</span>
          </li>
          <li className={css.listItem}>
            <span>Views</span> <span>{views}</span>
          </li>
          <li className={css.listItem}>
            <span>Likes</span> <span>{likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };
  
  export default Profile;