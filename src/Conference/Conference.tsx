import * as React from "react";
import * as model from "../models/conference";

export const Conference: React.FC<{ conference: model.Conference }> = ({
  conference,
}) => {
  return (
    <div>
      <h1>{conference.displayName}</h1>
      <p>{conference.description}</p>
    </div>
  );
};
