import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../components/Layout/Container/Container";
import { Repos } from "../../components/Repos";
import { getFavoriteRepos } from "../../store/slices/reposSlice";

const FavoritsPage = (): JSX.Element => {
  const { favorites } = useSelector((state: any) => state.repos);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteRepos());
  }, []);

  return (
    <Container>
      <Repos repos={favorites} />
    </Container>
  );
};

export default FavoritsPage;
