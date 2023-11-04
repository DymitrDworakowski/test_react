import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map((friend) => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
