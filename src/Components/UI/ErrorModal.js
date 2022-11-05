import Button from "./Button";
import Card from "./Card";

import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {

    return (
        <div>
        <div className={styles.backdrop} onClick={props.onError}/>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.eTitle}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.eMsg}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onError}>OK</Button>
            </footer>
        </Card>
        </div>
    );
}

export default ErrorModal;