import "./App.css";
//import User from "./components/User";
import UserList from "./components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <h1>List Of Users</h1>
      <UserList />
    </div>
  );
}

export default App;
