import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Header } from "semantic-ui-react";
import { routes } from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header
          as="h1"
          textAlign="center"
          style={{ padding: "20px 0 10px" }}
          color="violet"
        >
          AvitoTech x FreeToGame
        </Header>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
