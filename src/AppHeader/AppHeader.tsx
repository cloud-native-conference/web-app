import * as React from "react";
import {
  Flex,
  MenuButton,
  Button,
  AddIcon,
  Segment,
} from "@fluentui/react-northstar";
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
        <MenuButton
          trigger={<Button inverted icon={<AddIcon />} iconOnly />}
          menu={[
            {
              content: "New Conference",
              onClick: () => {
                history.push("/new-conference");
                console.log("yo mama");
              },
            },
          ]}
          on="click"
        />
      </Flex>
    </Segment>
  );
};
