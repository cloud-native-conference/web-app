import * as React from "react";

interface ConferenceListItemProps {
  displayName: string;
  description?: string;
}

export const ConferenceListItem: React.FunctionComponent<ConferenceListItemProps> = (
  props
) => (
  <div>
    <b>{props.displayName}</b> <p>{props?.description}</p>
  </div>
);
