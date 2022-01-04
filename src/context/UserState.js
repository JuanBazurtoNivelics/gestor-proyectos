import React from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase-config";
import { useReducer } from "react";

export const UserState = (props) => {
  const initialState = {
    developers: [],
    selectedDeveloper: null,
    currentProjects: [],
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getDevelopers = async () => {
    let developersList = [];

    const developers = await getDocs(collection(db, "developers"));
    developers.forEach((developer) => {
      developersList.push(developer.data());
    });

    dispatch({
      type: "GET_DEVELOPERS",
      payload: developersList,
    });
  };
  const getProfile = async (name) => {
    const citiesRef = query(
      collection(db, "developers"),
      where("name", "==", name)
    );
    const querySnapshot = await getDocs(citiesRef);
    let currentDeveloper;

    querySnapshot.forEach((doc) => {
      currentDeveloper = doc.data();
    });
    let projects = currentDeveloper.projects;
    dispatch({
      type: "GET_PROFILE",
      payload: projects,
    });
  };
  return (
    <UserContext.Provider
      value={{
        developers: state.developers,
        selectedDeveloper: state.selectedDeveloper,
        currentProjects: state.currentProjects,
        getDevelopers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
