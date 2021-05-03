import * as React from "react";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { getConference } from "../../api/api";
import { Conference as ConferenceComponent } from "../../Conference/Conference";
import { Conference as Model } from "../../models/conference";

export const Conference: React.FC = () => {
  const [conference, setConference] = useState<Model>();
  const match = useRouteMatch<{ uniqueName: string }>();
  const uniqueName = match.params.uniqueName;
  useEffect(() => {
    getConference(uniqueName).then((c) => {
      setConference(c);
    });
  }, [uniqueName]);
  return conference ? (
    <ConferenceComponent conference={conference} />
  ) : (
    <h1>loading</h1>
  );
};
