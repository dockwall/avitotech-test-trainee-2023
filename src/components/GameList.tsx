import React from "react";
import { Card } from "semantic-ui-react";
import { Game } from "../types/gameTypes";
import GameCard from "./GameCard";

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <Card.Group itemsPerRow={4}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Card.Group>
  );
};

export default GameList;
