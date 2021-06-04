import { Conference } from "../models/conference";

const ENDPOINT = "http://localhost:5000";

export const getConferences = async (): Promise<Conference[]> => {
  const response = await fetch(`${ENDPOINT}/conferences`);
  const conferences: Conference[] = await response.json();
  return conferences;
};
export const getConferenceById = async (
  id: string
): Promise<Conference> => {
  const response = await fetch(
    `${ENDPOINT}/conferences/${id}`
  );
  const conference: Conference = await response.json();
  return conference;
};

export const getConference = async (
  uniqueName: string
): Promise<Conference> => {
  const response = await fetch(
    `${ENDPOINT}/conferences?uniqueName=${uniqueName}`
  );
  const conference: Conference = (await response.json())[0];
  return conference;
};

export const createConference = async (
  conference: Omit<Conference, "id">
): Promise<Conference> => {
  const response = await fetch(`${ENDPOINT}/conferences`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(conference),
  });
  const json: Conference = await response.json();
  return json;
};
