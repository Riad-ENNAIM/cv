import React, { useReducer } from 'react';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import { GET_PROFILE } from '../types';
import profile from '../../data/profile';

const ProfileState = props => {
  const initialState = {
    profile: null,
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
  
  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        getProfile
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;