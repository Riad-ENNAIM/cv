import React, { useReducer } from 'react';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import { GET_EXPERIENCES, GET_PROJECTS, GET_SKILLS, GET_TRAININGS } from '../types';
import profile from '../../data/profile';

const ProfileState = props => {
  const initialState = {
    experiences: null,
    projects: null,
    skills: null,
    trainings: null,
    isLoading: true
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  // Get Experiences
  const getExperiences = async () => {
    const experiences = profile.experiences;

    dispatch({
      type: GET_EXPERIENCES,
      payload: experiences
    });
  };

  // Get Projects
  const getProjects = async () => {
    const projects = profile.projects;

    dispatch({
      type: GET_PROJECTS,
      payload: projects
    });
  };

  // Get Skills
  const getSkills = async () => {
    const skills = profile.skills;

    dispatch({
      type: GET_SKILLS,
      payload: skills
    });
  };

  // Get Experiences
  const getTrainings = async () => {
    const trainings = profile.trainings;

    dispatch({
      type: GET_TRAININGS,
      payload: trainings
    });
  };
  
  return (
    <ProfileContext.Provider
      value={{
        experiences: state.experiences,
        projects: state.projects,
        skills: state.skills,
        trainings: state.trainings,
        isLoading: state.isLoading,
        getExperiences,
        getProjects,
        getSkills,
        getTrainings
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;