import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const AddUser = () => {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [isUsers, setIsUsers] = useContext(UserContext);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setIsUsers((prevState) => [...prevState, { id: id, name: name, age: age }]);
    setID("");
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="number"
        name="id"
        placeholder="Enter your id"
        value={id}
        onChange={(e) => setID(e.target.value)}
      />
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="age"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddUser;
