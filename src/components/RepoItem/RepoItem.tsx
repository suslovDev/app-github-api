import { useDispatch } from "react-redux";

import { GH_COLORS } from "../../const/ghLangColor";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/slices/reposSlice";
import styles from "./RepoItem.module.css";
import Star from "./Star";

interface IRepoItemProps {
  id: string;
  url: string;
  name: string;
  primaryLanguage: string;
  viewerHasStarred: boolean;
}

const RepoItem = ({
  id,
  url,
  name,
  primaryLanguage,
  viewerHasStarred,
}: IRepoItemProps): JSX.Element => {
  const dispatch: any = useDispatch();

  const handleStarClick = (): void => {
    if (viewerHasStarred) {
      dispatch(removeFromFavorite(id));
      //мутация на удаление звезды
    } else {
      //мутация на добавление звезды
      dispatch(addToFavorite(id));
      console.log("Звезды нет", id);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.info}>
        <a className={styles.title} href={url}>
          {name}
        </a>
        <div className={styles.language}>
          <div
            className={styles.round}
            style={{ backgroundColor: GH_COLORS[primaryLanguage]?.color }}
          ></div>
          <span>{primaryLanguage}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={handleStarClick}>
          <span>
            {viewerHasStarred
              ? "Забрать свою звезду (-1)"
              : "Добавить в избранное (+1)"}
          </span>
          <span className={styles.star}>
            <Star />
          </span>
        </button>
      </div>
    </div>
  );
};

export default RepoItem;
