import React, { useReducer } from 'react';
import NavbarContext from './navbarContext';
import navbarReducer from './navbarReducer';
import { TOGGLE_TIMELINE } from '../types';

const NavbarState = props => {
  const initialState = {
    isTimeline: JSON.parse(localStorage.getItem('isTimeline'))
  };

  const [state, dispatch] = useReducer(navbarReducer, initialState);

  // Toggle Timeline
  const toggleTimeline = () => {
    dispatch({ type: TOGGLE_TIMELINE });
  }
  
  return (
    <NavbarContext.Provider
      value={{
        isTimeline: state.isTimeline,
        toggleTimeline
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;