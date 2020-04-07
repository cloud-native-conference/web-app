import { useQuery, gql } from "@apollo/client";
import * as React from "react";

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
    <ul>
      {data?.conferences.map((conference) => (
        <li key={conference.uniqueName}>
          <b>{conference.displayName}</b> <p>{conference.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ConferenceList;
