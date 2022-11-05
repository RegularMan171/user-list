import styles from './User.module.css';

import Card from "../UI/Card";

const User = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" />
                <label htmlFor="age">Age: </label>
                <input id="age" type="number"></input>
                <button type="submit">Add User</button>
            </form>
        </Card> 
    )
}

export default User;