import Profile from "./components/Profile";
import FriendList from "./components/FriendListItem";

import user from "./db/user.json";
import friends from "./db/friends.json";

export default function App() {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <FriendList friends={friends} />,
    </div>
  );
}
