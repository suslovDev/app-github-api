import styles from "./SearchInput.module.css";

const SearchInput = ({
  placeholder = "",
  value,
  onChange,
}: {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}): JSX.Element => {
  return (
    <>
      <input
        type="search"
        className={styles.search}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
