import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../store/gameSlice";
import { RootState, AppDispatch } from "../store/store";
import { Container } from "semantic-ui-react";
import LoadingIndicator from "../components/LoadingIndicator";
import FilterBar from "../components/FilterBar";
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
      <FilterBar />
      <GameList games={games} />
    </Container>
  );
};

export default Home;
