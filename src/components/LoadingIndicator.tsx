import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const LoadingIndicator: React.FC = () => {
  return (
    <Dimmer active inverted page>
      <Loader size="large">Loading...</Loader>
    </Dimmer>
  );
};

export default LoadingIndicator;
