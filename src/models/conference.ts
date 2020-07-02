import { gql } from "@apollo/client";

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

export { CONFERENCES, ConferenceData, ConferenceListData };
