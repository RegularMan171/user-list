import {useState} from 'react';
import styles from './User.module.css';
import Card from "../UI/Card";
import Button from '../UI/Button';

const User = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge <= 0)
            return;
        console.log(enteredAge, enteredUsername)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age: </label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                {/* <button type="submit">Add User</button> */}
                <Button type="submit">
                    Add User
                </Button>
            </form>
        </Card> 
    )
}

export default User;