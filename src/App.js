import Profile from "./components/Profile/Profile";
import FriendList from "./components/Friends/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/Transaction/TransactionHistory";

import user from "./db/user.json";
import friends from "./db/friends.json";
import data from "./db/data.json";
import transactions from "./db/transactions.json";

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
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} />;
       */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
