import React, { useReducer } from 'react';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import { GET_PROFILE, TOGGLE_TIMELINE } from '../types';
import profile from '../../data/profile';

const ProfileState = props => {
  const initialState = {
    profile: null,
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

  // Toggle Timeline
  const toggleTimeline = () => {
    dispatch({ type: TOGGLE_TIMELINE });
  }
  
  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        isTimeline: state.isTimeline,
        getProfile,
        toggleTimeline
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;