import {useState} from 'react';
import styles from './AddUser.module.css';
import Card from "../UI/Card";
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge <= 0)
        {
            setError({
                eTitle: 'Invalid Input',
                eMsg: 'Please enter valid name and/or age'
            });
            return;
        }
        // console.log(enteredAge, enteredUsername)
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal eTitle={error.eTitle} eMsg={error.eMsg} onError={errorHandler}/>}
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
    </div>
    )
}

export default AddUser;