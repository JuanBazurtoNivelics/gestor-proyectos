import { GET_DEVELOPERS, GET_PROFILE, GET_PROJECTS } from "./types";

const UserReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_DEVELOPERS:
      return {
        ...state,
        developers: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedDeveloper: payload,
      };
    case GET_PROJECTS:
      return {
        ...state,
        currentProjects: payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
