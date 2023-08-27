import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../store/gameSlice";
import { RootState, AppDispatch } from "../store/store";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { games, loading, error } = useSelector(
    (state: RootState) => state.games
  );
  useEffect(() => {
    dispatch(fetchGames()); // TODO: add filters and sorters
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>place for List of Games</h1>
      <p>Games in list: {games.length}</p>
    </div>
  );
};

export default Home;
