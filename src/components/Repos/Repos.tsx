import RepoItem from "../RepoItem/RepoItem";
import styles from "./Repos.module.css";

const Repos = ({ repos }: { repos: any }): JSX.Element => {
  return (
    <ul className={styles.list}>
      {repos.map((repo: any) => (
        <li key={repo.id} className={styles.item}>
          <RepoItem {...repo} />
        </li>
      ))}
    </ul>
  );
};

export default Repos;
