import PropTypes from "prop-types";
import styles from "../module-styles/Friends.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.Item}>
    <span className={isOnline ? styles.Active : styles.Inactive}></span>
    <img className={styles.Avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.Name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
