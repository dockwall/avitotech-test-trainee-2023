import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Game } from "../types/gameTypes";

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { id, title, release_date, publisher, genre, thumbnail } = game;

  return (
    <Card as={Link} to={`/game/${id}`}>
      <Image src={thumbnail} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">
            Дата релиза: {new Date(release_date).toLocaleDateString("ru-RU")}
          </span>
        </Card.Meta>
        <Card.Description>
          Издатель: {publisher} <br />
          Жанр: {genre}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default GameCard;
