import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UserList = (props) => {
  return (
    <Card clasName={classes.users}>
      <ul>
        {props.users.map((alias) => 
          <li key={alias.id}>
            {alias.name} ({alias.age} years old)
          </li>
        )}
      </ul>
    </Card>
  );
};

export default UserList;
