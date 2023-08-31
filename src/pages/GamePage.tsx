import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Image, Button, Grid } from "semantic-ui-react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchGameById } from "../store/gameSlice";
import { RootState, AppDispatch } from "../store/store";
import { MinimumSystemRequirements } from "../types/gameTypes";
import LoadingIndicator from "../components/LoadingIndicator";
import ScreenshotCarousel from "../components/ScreenshotCarousel";

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ru-RU");
};

const getMinSystemReqs = (minSystemReqs?: MinimumSystemRequirements) => {
  if (!minSystemReqs) {
    return null;
  }

  const reqs = Object.entries(minSystemReqs).map(([key, text]) => (
    <li key={key}>{text}</li>
  ));

  return (
    <>
      <strong>Системные требования:</strong>
      <ul>{reqs}</ul>
    </>
  );
};

const GamePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { gameDetails, loading, error } = useSelector(
    (state: RootState) => state.games
  );

  useEffect(() => {
    dispatch(fetchGameById(Number(id)));
  }, [dispatch, id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Card fluid>
        <Card.Content>
          <Card.Header>{gameDetails?.title}</Card.Header>
          <Card.Description>
            <Grid columns={2}>
              <Grid.Column>
                <Image
                  src={gameDetails?.thumbnail}
                  alt={gameDetails?.title}
                  style={{ padding: "25px 0" }}
                />
                <Button onClick={() => navigate(-1)}>
                  Вернуться к списку игр
                </Button>
              </Grid.Column>
              <Grid.Column>
                <p>
                  <strong>Дата релиза:</strong>{" "}
                  {formatDate(gameDetails?.release_date || "")}
                </p>
                <p>
                  <strong>Издатель:</strong> {gameDetails?.publisher}
                </p>
                <p>
                  <strong>Разработчик:</strong> {gameDetails?.developer}
                </p>
                <p>
                  <strong>Жанр:</strong> {gameDetails?.genre}
                </p>
                <p>
                  {getMinSystemReqs(gameDetails?.minimum_system_requirements)}
                </p>
              </Grid.Column>
            </Grid>
            <ScreenshotCarousel screenshots={gameDetails?.screenshots || []} />
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default GamePage;
