import "./App.css";
import UserList from "./UserList";
import { UserProvider } from "./UserContext";
import AddUser from "./AddUser";

function App() {
  return (
    <UserProvider>
      <div>
        <AddUser />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
