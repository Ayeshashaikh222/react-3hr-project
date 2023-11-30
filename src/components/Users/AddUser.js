import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../Helpers/Wrapper';



const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const CollegeInputRef = useRef();

    const [error, setError] = useState();


    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredCollegeName = CollegeInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0  || enteredCollegeName.trim().length === 0) {
            setError({
                title: 'Inavlid Input',
                message: 'Please enter a valid name, age and college name (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Inavlid Age',
                message: 'Please enter a valid age (> 0 ).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge, enteredCollegeName);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        CollegeInputRef.current.value = '';
        

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
                    <input id='username' type='text'  ref={nameInputRef} />
                    <label htmlFor='age'>Age(years):</label>
                    <input id='age' type='number' ref={ageInputRef} />
                    <label htmlFor='collegeName'>College Name:</label>
                    <input id='collegeName' type='text' ref={CollegeInputRef}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )

}

export default AddUser;