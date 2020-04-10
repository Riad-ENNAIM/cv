import React, { useReducer } from 'react';
import NavbarContext from './navbarContext';
import navbarReducer from './navbarReducer';
import { 
  SET_ACTIVE_TAB,
  TOGGLE_TIMELINE
} from '../types';

const NavbarState = props => {
  const initialState = {
    activeTab: null,
    isTimeline: true
  };

  const [state, dispatch] = useReducer(navbarReducer, initialState);

  // Set Active Tab
   const setActiveTab = tab => {
    dispatch({ type: SET_ACTIVE_TAB, payload: tab });
  }

  // Toggle Timeline
  const toggleTimeline = () => {
    dispatch({ type: TOGGLE_TIMELINE });
  }
  
  return (
    <NavbarContext.Provider
      value={{
        activeTab: state.activeTab,
        isTimeline: state.isTimeline,
        setActiveTab,
        toggleTimeline
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;