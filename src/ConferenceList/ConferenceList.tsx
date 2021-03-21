import * as React from "react";
import { getConferences } from "../api/api";
import { Conference } from "../models/conference";
import { ConferenceListItem } from "./ConferenceListItem";

export const ConferenceList: React.FC = () => {
  const [conferences, setConferences] = React.useState<Conference[]>([]);

  React.useEffect(() => {
    (async () => {
      const data = await getConferences();
      setConferences(data);
    })();
  }, []);
  return (
    <div>
      {conferences.map((conference) => (
        <ConferenceListItem conference={conference} />
      ))}
    </div>
  );
};
