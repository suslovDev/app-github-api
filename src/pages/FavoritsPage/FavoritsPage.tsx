import { useDispatch, useSelector } from "react-redux";

import Container from "../../components/Layout/Container/Container";
import { Repos } from "../../components/Repos";
import { getRepos } from "../../store/slices/authSlice";

const FavoritsPage = (): JSX.Element => {
  const { repos } = useSelector((state: any) => state.auth);

  const dispatch: any = useDispatch();

  const handleClick = () => {
    dispatch(getRepos("navigate"));
  };

  return (
    <Container>
      <button onClick={handleClick}>Get repos</button>
      <Repos
        isFavorite={true}
        repos={[
          { language: "JavaScript", name: "some_one", id: 4 },
          { language: "TypeScript", name: "some_other", id: 5 },
        ]}
      />
    </Container>
  );
};

export default FavoritsPage;
