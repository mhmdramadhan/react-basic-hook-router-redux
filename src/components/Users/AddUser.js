import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(false);

  const UserHandler = (event) => {
    // agar tidak loading saat di klik
    event.preventDefault();

    // fungsi trim untuk menghapus semua spasi pada string
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input!',
        message: 'Please enter a valid username and age!',
      });
      return;
    }
    // tanda + untuk mengkonversi data string jadi number
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age!',
        message: 'Please enter a valid age!',
      });
      return;
    }

    props.onAddUser(enteredUsername, +enteredAge);
    // clear input
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    // merubah data username dari default
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const resetErrorHandler = (props) => {
    setError(props);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} setError={resetErrorHandler} />}
      <Card className={classes.inputs}>
        <form onSubmit={UserHandler}>
          <div className={classes.form_group}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
