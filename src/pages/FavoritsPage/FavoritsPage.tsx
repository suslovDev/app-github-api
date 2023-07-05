import Container from "../../components/Layout/Container/Container";
import Repos from "../../components/Repos/Repos";

const FavoritsPage = (): JSX.Element => {
  return (
    <Container>
      <Repos
        isFavorite={true}
        repos={[
          { language: "JavaScript", name: "some_one" },
          { language: "TypeScript", name: "some_other" },
        ]}
      />
    </Container>
  );
};

export default FavoritsPage;
