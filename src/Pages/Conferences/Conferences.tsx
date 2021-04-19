import * as React from "react";
import { Link } from "react-router-dom";
import { ConferenceList } from "../../ConferenceList/ConferenceList";
import { CreateButton } from "../../CreateButton/CreateButton";

export const Conferences: React.FC = () => {
  return (
    <div className="max-w-4xl m-auto px-4 py-8 sm:px-8">
      <div className="flex justify-end">
        <Link to="/new-conference">
          <CreateButton text="New Conference" />
        </Link>
      </div>
      <ConferenceList />
    </div>
  );
};
