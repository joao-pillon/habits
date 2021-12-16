const Users = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
