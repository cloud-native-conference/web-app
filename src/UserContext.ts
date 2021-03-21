import { createContext } from "react";

type User = {
  username: string;
};

export const UserContext = createContext<User | undefined>(undefined);
