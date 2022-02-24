import React, { useState } from 'react';

import AddUsers from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [usersList, setUserList] = useState([]);

  // create adduser handler function
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsers) => {
      return [...prevUsers, { id: Math.random().toString(), name: uName, age: uAge }];
    });
  };

  return (
    <div className="App">
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
