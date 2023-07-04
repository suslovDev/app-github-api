import { GH_COLORS } from "../../const/ghLangColor";
import styles from "./RepoItem.module.css";
import Star from "./Star";

const RepoItem = ({
  repoName,
  repoLanguage,
}: {
  repoName: string;
  repoLanguage: string;
}): JSX.Element => {
  return (
    <div className={styles.wrap}>
      <div className={styles.info}>
        <span className={styles.title}>{repoName}</span>
        <div className={styles.language}>
          <div
            className={styles.round}
            style={{ backgroundColor: GH_COLORS[repoLanguage].color }}
          ></div>
          <span>{repoLanguage}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn}>Добавить в избранное</button>
        <button className={styles.btn}>
          <span>Поставить звезду (+1)</span>
          <span className={styles.star}>
            <Star />
          </span>
        </button>
      </div>
    </div>
  );
};

export default RepoItem;
