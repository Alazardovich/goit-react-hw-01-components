import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./Friends.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.FriendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList;
