// import logo from './logo.svg';
import React, { Fragment, useState } from 'react';

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
    // <>
    // <React.Fragment>
    // <div>
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </Fragment>
    // </div>
    // </React.Fragment>
    // </>
  );
}

export default App;
