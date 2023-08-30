import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { routes } from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
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
