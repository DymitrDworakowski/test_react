import "./App.css";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import user from "./server/user.json";
import data from "./server/data.json";
import friends from "./server/friends.json";

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />;
      <Statistics stats={data} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

export default App;
