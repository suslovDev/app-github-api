import RepoItem from "../RepoItem/RepoItem";
import styles from "./Repos.module.css";

const Repos = ({
  repos,
  isFavorite = false,
}: {
  repos: any;
  isFavorite?: boolean;
}): JSX.Element => {
  return (
    <ul className={styles.list}>
      {repos.map((repo: any) => (
        <li key={repo.id}>
          <RepoItem repoLanguage={repo.language} repoName={repo.name} isFavorite={isFavorite}/>
        </li>
      ))}
    </ul>
  );
};

export default Repos;
