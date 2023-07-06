import { useState } from "react";

import { Repos } from "../Repos";
import { SearchInput } from "../SearchInput";
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
          { language: "JavaScript", name: "some_one", id: 1 },
          { language: "TypeScript", name: "some_other", id: 2 },
          { language: "Kotlin", name: "some", id: 3 },
        ]}
      />
    </div>
  );
};

export default SearchRepos;
