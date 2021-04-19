import * as React from "react";
import { Conference } from "../models/conference";

interface Props {
  conference: Conference;
}

export const ConferenceListItem: React.FC<Props> = ({ conference }) => (
  <div className="mt-6">
    <div className="px-10 py-6 bg-white rounded-lg shadow-md m-auto">
      <div className="mt-2">
        <a
          href="#"
          className="text-2xl text-gray-700 font-bold hover:underline"
        >
          {conference.displayName}
        </a>
        <p className="mt-2 text-gray-600">{conference.description}</p>
      </div>
      <div className="flex justify-between items-center mt-4"></div>
    </div>
  </div>
);
