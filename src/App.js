// import logo from './logo.svg';
import { useState } from 'react';

import './App.css';
import AddUser from './Components/User/AddUser'
import UserList from './Components/User/UserList';

function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: username, age, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
