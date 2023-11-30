import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../Helpers/Wrapper';



const AddUser = (props) => {

    const [entereduserName, setEnteredUserName] = useState('');
    const [entereduserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();


    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (entereduserName.trim().length === 0 || entereduserAge.trim().length === 0) {
            setError({
                title: 'Inavlid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+entereduserAge < 1) {
            setError({
                title: 'Inavlid Age',
                message: 'Please enter a valid n age (grater then zero).'
            });
            return;
        }
        console.log(entereduserName, entereduserAge);
        props.onAddUser(entereduserName, entereduserAge);
        setEnteredUserName('');
        setEnteredUserAge('');

    };

    const OnUserInputHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const OnUserAgeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };



    return (
        <Wrapper>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor='username'>Username:</label>
                    <input id='username' value={entereduserName} type='text' onChange={OnUserInputHandler} />
                    <label htmlFor='age'>Age(years):</label>
                    <input id='age' type='number' value={entereduserAge} onChange={OnUserAgeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )

}

export default AddUser;