import PropTypes from "prop-types";
import styles from "../module-styles/Profile.module.css";

export default function Profile({
  userName,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  // const {
  //   userName,
  //   tag,
  //   location,
  //   avatar,
  //   stats: { followers, views, likes },
  // } = props;

  return (
    <div className={styles.Profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          width="150"
          alt="props avatar"
          className={styles.Avatar}
        />
        <p className={styles.NameTagLocation}>{userName}</p>
        <p className={styles.NameTagLocation}>{tag}</p>
        <p className={styles.NameTagLocation}>{location}</p>
      </div>

      <ul className={styles.Stats}>
        <li className={styles.StatsItem}>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li className={styles.StatsItem}>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li className={styles.StatsItem}>
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  stats: PropTypes.object.isRequired,
};
