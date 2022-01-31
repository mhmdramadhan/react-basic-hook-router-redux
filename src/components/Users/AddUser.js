import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './AddUser.module.css';

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const UserHandler = (event) => {
    // agar tidak loading saat di klik
    event.preventDefault();

    console.log(enteredUsername, enteredAge)
  };

  const usernameChangeHandler = (event) => {
    // merubah data username dari default
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.inputs}>
      <form onSubmit={UserHandler}>
        <div className={classes.form_group}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} />
        </div>
        <div className={classes.form_group}>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
