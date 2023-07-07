import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearFound, getRepos } from "../../store/slices/reposSlice";
import { Repos } from "../Repos";
import { SearchInput } from "../SearchInput";
import styles from "./SearchRepos.module.css";

const SearchRepos = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const { found } = useSelector((state: any) => state.repos);

  const dispatch: any = useDispatch();

  useEffect(() => {
 /*    if (found.length) {
      return;
    } */
    dispatch(getRepos(inputValue));
  }, [inputValue, dispatch]);

  const handleFocus = () => {
    dispatch(clearFound());
  };

  return (
    <div className={styles.wrap}>
      <SearchInput
        placeholder="Найти репозиторий..."
        value={inputValue}
        onChange={setInputValue}
        onFocus={handleFocus}
      />
      <Repos repos={found} />
    </div>
  );
};

export default SearchRepos;
