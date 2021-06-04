import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getConferenceById } from "../../api/api";
import { Conference as ConferenceComponent } from "../../Conference/Conference";
import { Conference as Model } from "../../models/conference";


export const Conference: React.FC = () => {
  const [conference, setConference] = useState<Model>();
  const match = useParams<{ id: string }>();
  const conferenceId = match.id;
  useEffect(() => {
    getConferenceById(conferenceId).then((c) => {
      setConference(c);
    });
  }, [conferenceId]);
  return conference ? (
    <ConferenceComponent conference={conference} />
  ) : (
    <h1>loading</h1>
  );
};
