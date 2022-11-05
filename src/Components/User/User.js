import {useState} from 'react';
import styles from './User.module.css';
import Card from "../UI/Card";
import Button from '../UI/Button';

const User = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredAge, enteredUsername)
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
                <input id="username" type="text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age: </label>
                <input id="age" type="number" onChange={ageChangeHandler}></input>
                {/* <button type="submit">Add User</button> */}
                <Button type="submit">
                    Add User
                </Button>
            </form>
        </Card> 
    )
}

export default User;