import * as React from "react";
import { Segment, Flex, Button } from "@fluentui/react-northstar";
import { useHistory } from "react-router-dom";

export const AppHeader: React.FC = () => {
  const history = useHistory();
  return (
    <Segment color="brand" inverted>
      <Flex>
        <Button
          text
          content="Cloud Native Conference"
          styles={{
            color: "white",
            ":hover": {
              color: "white",
              opacity: 0.5,
            },
          }}
          onClick={() => {
            history.push("/");
          }}
        />
      </Flex>
    </Segment>
  );
};
