import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../store/gameSlice";
import { RootState, AppDispatch } from "../store/store";
import { Container, Header } from "semantic-ui-react";
import LoadingIndicator from "../components/LoadingIndicator";
import GameList from "../components/GameList";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { games, loading, error } = useSelector(
    (state: RootState) => state.games
  );
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Header
        as="h1"
        textAlign="center"
        style={{ padding: "20px 0 10px" }}
        color="violet"
      >
        AvitoTech x FreeToGame
      </Header>
      <GameList games={games} />
    </Container>
  );
};

export default Home;
