import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  let Users = [
    {
      name: "Juan Dela Cruz",
      age: 18,
      id: 1,
    },
    {
      name: "Pedro Gonzales",
      age: 22,
      id: 2,
    },
    {
      name: "Boy Regino",
      age: 20,
      id: 3,
    },
  ];

  const [isUsers, setIsUsers] = useState(Users);

  return (
    <UserContext.Provider value={[isUsers, setIsUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
