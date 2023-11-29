import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import UserList from './UserList';




const AddUser = (props) => {
    const [entereduserName, setEnteredUserName] = useState('');
    const [eneterduserAge, setEnteredUserAge] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (entereduserName.trim().length === 0 || eneterduserAge.trim().length === 0) {
            return;
        }
        if (+eneterduserAge < 1) {
            alert("please enter the valid age!")
        }
        // console.log(entereduserName, eneterduserAge);
        props.onAddUser(entereduserName, eneterduserAge);
        setEnteredUserName('');
        setEnteredUserAge('');

    }

    const OnUserInputHandler = (event) => {
        setEnteredUserName(event.target.value);


    }

    const OnUserAgeHandler = (event) => {
        setEnteredUserAge(event.target.value);


    }



    return (
        <Card className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='username'>Username:</label>
                <input id='username' value={entereduserName} type='text' onChange={OnUserInputHandler} />
                <label htmlFor='age'>Age(years):</label>
                <input id='age' type='number' value={eneterduserAge} onChange={OnUserAgeHandler} />
                <Button type='submit'>Add User</Button>
            </form>

        </Card>
    )

}

export default AddUser;