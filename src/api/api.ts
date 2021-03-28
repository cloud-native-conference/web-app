import { Conference } from "../models/conference";

const ENDPOINT = "http://localhost:5000";

export const getConferences = async (): Promise<Conference[]> => {
  const response = await fetch(`${ENDPOINT}/conferences`);
  const conferences: Conference[] = await response.json();
  return conferences;
};

export const createConference = async (
  conference: Conference
): Promise<Conference> => {
 const response = await fetch(`${ENDPOINT}/conferences`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(conference),
  });
  const json : Conference= await response.json();
  return json;
};
