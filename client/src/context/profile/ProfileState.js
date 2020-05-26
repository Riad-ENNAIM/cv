import React, { useReducer } from 'react';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import {
  GET_PROFILE,
  SEARCH_IN_PROFILE,
  TOGGLE_TIMELINE,
  TOGGLE_DARK_MODE,
  TOGGLE_LANGUAGE
} from '../types';
import { frProfile, engProfile } from '../../data/profile';

const ProfileState = props => {
  const initialState = {
    profile: null,
    serchResult: null,
    isTimeline: JSON.parse(localStorage.getItem('isTimeline')),
    isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')),
    language: JSON.parse(localStorage.getItem('language')) ?? 'fr',
    isLoading: true
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  // Get Profile
  const getProfile = async () => {
    const profile = state.language === 'eng' ? engProfile : frProfile;

    dispatch({
      type: GET_PROFILE,
      payload: profile
    });
  }

  // Search In Profile
  const searchInProfile = text => {
    const profile = state.language === 'eng' ? engProfile : frProfile;
    const result = {};

    if(text) {
      result.experiences = profile.experiences.filter(experience => {
        const technologies = experience.technologies.filter(technology => technology.text.toLowerCase().includes(text.toLowerCase()));
        const tasks = experience.tasks.filter(task => task.text.toLowerCase().includes(text.toLowerCase()));

        return (
          tasks.length > 0 ||
          technologies.length > 0 ||
          (experience.title && experience.title.toLowerCase().includes(text.toLowerCase())) ||
          (experience.company && experience.company.toLowerCase().includes(text.toLowerCase())) ||
          (experience.location && experience.location.toLowerCase().includes(text.toLowerCase()))
        );
      });

      result.projects = profile.projects.filter(project => {
        const tasks = project.tasks.filter(task => task.text.toLowerCase().includes(text.toLowerCase()));

        return (
          tasks.length > 0 ||
          (project.title && project.title.toLowerCase().includes(text.toLowerCase())) ||
          (project.client && project.client.toLowerCase().includes(text.toLowerCase())) ||
          (project.technology && project.technology.toLowerCase().includes(text.toLowerCase()))
        );
      });

      result.trainings = profile.trainings.filter(training => {
        return (
          (training.title && training.title.toLowerCase().includes(text.toLowerCase())) ||
          (training.school && training.school.toLowerCase().includes(text.toLowerCase())) ||
          (training.location && training.location.toLowerCase().includes(text.toLowerCase()))
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
    localStorage.setItem('isTimeline', JSON.stringify(!state.isTimeline));

    dispatch({ type: TOGGLE_TIMELINE });
  }

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    localStorage.setItem('isDarkMode', JSON.stringify(!state.isDarkMode));

    dispatch({ type: TOGGLE_DARK_MODE });
  }

  // Toggle Language
  const toggleLanguage = () => {
    const lang = state.language === 'eng' ? 'fr' : 'eng';
    localStorage.setItem('language', JSON.stringify(lang));

    dispatch({ 
      type: TOGGLE_LANGUAGE,
      payload: lang
    });
  }
  
  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        serchResult: state.serchResult,
        isTimeline: state.isTimeline,
        isDarkMode: state.isDarkMode,
        language: state.language,
        getProfile,
        searchInProfile,
        toggleTimeline,
        toggleDarkMode,
        toggleLanguage
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;