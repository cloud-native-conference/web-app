import * as React from "react";
import {
  Divider,
  Form,
  Input,
  TextArea,
  Button,
  Flex,
} from "@fluentui/react-northstar";

interface NewConferenceProps {}

const maxWidth = "696px";

export const NewConference: React.FunctionComponent<NewConferenceProps> = (
  _
) => {
  const [displayName, setDisplayName] = React.useState<string>("");

  return (
    <Flex
      gap="gap.large"
      column
      design={{
        maxWidth,
        margin: "auto",
      }}
    >
      <h1>Create a new conference</h1>
      <Divider />
      <Form
        design={{
          paddingLeft: "24px",
        }}
        fields={[
          {
            label: "Conference unique name",
            name: "conferenceUniqueName",
            id: "conference-unique-name",
            key: "conference-unique-name",
            required: true,
            design: {
              minWidth: "60%",
              maxWidth: "90%",
              marginRight: "auto",
            },
            control: {
              as: () => <Input fluid />,
              showSuccessIndicator: false,
            },
          },
          {
            label: "Conference display name",
            name: "conferenceDisplayName",
            id: "conference-display-name",
            key: "conference-display-name",
            required: true,
            design: {
              minWidth: "60%",
              maxWidth: "90%",
              marginRight: "auto",
            },
            control: {
              as: () => (
                <Input
                  fluid
                  onChange={(_, text) => {
                    if (!text) {
                      return;
                    }
                    setDisplayName(text?.value);
                    console.log(displayName);
                  }}
                />
              ),
              showSuccessIndicator: false,
            },
          },
          {
            label: "Description",
            name: "description",
            id: "description",
            key: "description",
            required: false,
            design: {
              minWidth: "80%",
              maxWidth: "90%",
              marginRight: "auto",
            },
            control: {
              as: () => <TextArea fluid />,
            },
          },
          {
            control: {
              as: Button,
              content: "Create conference",
            },
            key: "create-conference",
          },
        ]}
        onSubmit={(_, data) => {
          console.log(data);
        }}
      />
    </Flex>
  );
};
