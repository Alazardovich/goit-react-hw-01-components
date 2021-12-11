import Profile from "./components/Profile";
import FriendList from "./components/FriendList";
import Statistics from "./components/Statistics";

import user from "./db/user.json";
import friends from "./db/friends.json";
import data from "./db/data.json";

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
      <Statistics title="Upload stats" stats={data} />;
      {/* <Statistics stats={data} />;
       */}
      <FriendList friends={friends} />
    </div>
  );
}
