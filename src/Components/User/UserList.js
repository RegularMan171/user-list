import Card from '../UI/Card'
import styles from './UserList.module.css';

const UserList = (props) => {
    console.log(props.users)
    return (
        <Card className={styles.users}>
        <ul>
            {props.users.map((u) => (
                <li key={u.id}>{u.name} ({u.age} years old)</li>
            ))}
        </ul>
        </Card>
    );
}

export default UserList;