import * as React from "react";
import {
  Divider,
  Form,
  Input,
  TextArea,
  Button,
  Flex,
  FormProps,
  Header,
} from "@fluentui/react-northstar";

interface NewConferenceProps {}

const maxWidth = "696px";

export const NewConference: React.FunctionComponent<NewConferenceProps> = (
  _
) => {
  const [uniqueName, setUniqueName] = React.useState<string>("");
  const [displayName, setDisplayName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  return (
    <Flex
      gap="gap.large"
      column
      design={{
        maxWidth,
        margin: "auto",
      }}
    >
      <Header
        as="h2"
        content="Create a new conference"
        description="A conference is an event that hosts a collection
         of keynotes, talks and sessions"
      />
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
            type: "text",
            required: true,
            design: {
              minWidth: "60%",
              maxWidth: "90%",
              marginRight: "auto",
            },
            control: {
              type: "text",
              content: (
                <Input
                  fluid
                  value={uniqueName}
                  onChange={(_, data?) => {
                    if (!data) {
                      return;
                    }
                    setUniqueName(data?.value);
                  }}
                />
              ),
              showSuccessIndicator: false,
            },
          },
          {
            label: "Conference display name",
            name: "conferenceDisplayName",
            id: "conference-display-name",
            key: "conference-display-name",
            type: "text",
            required: true,
            design: {
              minWidth: "60%",
              maxWidth: "90%",
              marginRight: "auto",
            },
            control: {
              content: (
                <Input
                  fluid
                  value={displayName}
                  onChange={(_, data) => {
                    if (!data) {
                      return;
                    }
                    setDisplayName(data?.value);
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
              content: (
                <TextArea
                  fluid
                  value={description}
                  onChange={(_, data) => {
                    if (!data?.value) {
                      return;
                    }
                    setDescription(data?.value);
                  }}
                />
              ),
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
        onSubmit={(_, data: FormProps | undefined) => {
          console.log(data);
        }}
      />
    </Flex>
  );
};
