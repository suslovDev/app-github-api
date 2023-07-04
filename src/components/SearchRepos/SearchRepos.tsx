import { useState } from "react";
import Repos from "../Repos/Repos";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./SearchRepos.module.css";

// in this component should get repos from api

const SearchRepos = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={styles.wrap}>
      <SearchInput
        placeholder="Найти репозиторий..."
        value={inputValue}
        onChange={setInputValue}
      />
      <Repos
        repos={[
          { language: "JavaScript", name: "some_one" },
          { language: "TypeScript", name: "some_other" },
          { language: "Kotlin", name: "some" },
        ]}
      />
    </div>
  );
};

export default SearchRepos;
