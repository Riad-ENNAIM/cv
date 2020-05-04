import React, { useReducer } from 'react';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import { GET_PROFILE, TOGGLE_TIMELINE, SEARCH_IN_PROFILE } from '../types';
import profile from '../../data/profile';

const ProfileState = props => {
  const initialState = {
    profile: null,
    serchResult: null,
    isTimeline: JSON.parse(localStorage.getItem('isTimeline')),
    isLoading: true
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  // Get Profile
  const getProfile = async () => {
    dispatch({
      type: GET_PROFILE,
      payload: profile
    });
  };

  // Search In Profile
  const searchInProfile = text => {
    const result = {};

    if(text) {
      result.experiences = profile.experiences.filter(experience => {
        const technologies = experience.technologies.filter(technology => technology.text.toLowerCase().includes(text.toLowerCase()));
        const tasks = experience.tasks.filter(task => task.text.toLowerCase().includes(text.toLowerCase()));

        return (
          tasks.length > 0 ||
          technologies.length > 0 ||
          experience.title.toLowerCase().includes(text.toLowerCase()) ||
          experience.company.toLowerCase().includes(text.toLowerCase()) ||
          experience.location.toLowerCase().includes(text.toLowerCase()) ||
          experience.location.toLowerCase().includes(text.toLowerCase())
        );
      });

      result.projects = profile.projects.filter(project => {
        const tasks = project.tasks.filter(task => task.text.toLowerCase().includes(text.toLowerCase()));

        return (
          tasks.length > 0 ||
          project.title.toLowerCase().includes(text.toLowerCase()) ||
          project.client.toLowerCase().includes(text.toLowerCase()) ||
          project.technology.toLowerCase().includes(text.toLowerCase())
        );
      });

      result.trainings = profile.trainings.filter(training => {
        return (
          training.title.toLowerCase().includes(text.toLowerCase()) ||
          training.school.toLowerCase().includes(text.toLowerCase()) ||
          training.location.toLowerCase().includes(text.toLowerCase())
        );
      });
    }

    dispatch({
      type: SEARCH_IN_PROFILE,
      payload: result
    });
  }

  // Toggle Timeline
  const toggleTimeline = () => {
    dispatch({ type: TOGGLE_TIMELINE });
  }
  
  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        serchResult: state.serchResult,
        isTimeline: state.isTimeline,
        getProfile,
        searchInProfile,
        toggleTimeline
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;