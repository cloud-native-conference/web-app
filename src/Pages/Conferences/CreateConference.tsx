import * as React from "react";
import { useReducer } from "react";
import { useHistory } from "react-router";
import { createConference } from "../../api/api";
import { urlify } from "../../urlify/urlify";

type State = {
  name: string;
  description: string;
};
type Action = {
  type: "UPDATE_NAME" | "UPDATE_DESCRIPTION";
  value: string;
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.value,
      };
    case "UPDATE_DESCRIPTION":
      return {
        ...state,
        description: action.value,
      };
  }
};

export const CreateConference: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    description: "",
  });
  const history = useHistory();
  return (
    <div>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="p-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Create a new conference
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await createConference({
                  description: state.description,
                  uniqueName: urlify(state.name),
                  displayName: state.name,
                });
                history.push("/");
              }}
            >
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="conference_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Conference Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="conference_name"
                          id="conference_name"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="My Epic Conference"
                          value={state.name}
                          onChange={(e) => {
                            dispatch({
                              type: "UPDATE_NAME",
                              value: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={state.description}
                        onChange={(e) => {
                          dispatch({
                            type: "UPDATE_DESCRIPTION",
                            value: e.target.value,
                          });
                        }}
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description of the conference
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create conference
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
