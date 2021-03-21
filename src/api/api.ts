import { Conference } from "../models/conference";

export const getConferences = async (): Promise<Conference[]> => {
  const response = await fetch("http://localhost:4000/conferences");
  const conferences: Conference[] = await response.json();
  return conferences;
};
