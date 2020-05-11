import { useQuery, gql } from "@apollo/client";
import * as React from "react";
import { List } from "@fluentui/react-northstar";

const CONFERENCES = gql`
  {
    conferences {
      uniqueName
      displayName
      description
    }
  }
`;

interface ConferenceData {
  uniqueName: string;
  displayName: string;
  description: string;
}

interface ConferenceListData {
  conferences: ConferenceData[];
}

const ConferenceList: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery<ConferenceListData>(CONFERENCES);

  if (error) {
    console.log(error);
    return <p>{error}</p>;
  }

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <List
      navigable
      items={data?.conferences.map((conference) => ({
        key: conference.uniqueName,
        header: conference.displayName,
        content: conference?.description,
      }))}
    />
  );
};

export default ConferenceList;
