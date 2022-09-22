import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./UserContext";

const UserList = () => {
  const [isUsers, setIsUsers] = useContext(UserContext);

  return (
    <div>
      {isUsers.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
