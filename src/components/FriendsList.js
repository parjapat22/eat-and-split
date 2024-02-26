import Friend from "./Friend";

const FriendsList = ({ initialFriends }) => {
  const friends = initialFriends;

  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
