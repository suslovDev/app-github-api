import { Container } from "../Layout/Container";
import styles from "./NotAuthorized.module.css";
import Shield from "./Shield";

const NotAuthorized = ({ text }: { text: string }): JSX.Element => {
  return (
    <Container>
      <div className={styles.warn}>
        <Shield />
        <p className={styles.text}>{text}</p>
      </div>
    </Container>
  );
};

export default NotAuthorized;
