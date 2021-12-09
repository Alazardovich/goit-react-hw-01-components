// import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

const FriendList = (friends) => {
    console.log(friends);
    // const { avatar, friendName, statusFriend, key} = friends;
    return <ul className="friend-list">
    <FriendListItem/>
  </ul>
}
export default FriendList;