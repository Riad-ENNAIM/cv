import React, { useReducer } from 'react';
import NavbarContext from './navbarContext';
import navbarReducer from './navbarReducer';
import { SET_ACTIVE_TAB } from '../types';

const NavbarState = props => {
  const initialState = {
    activeTab: null
  };

  const [state, dispatch] = useReducer(navbarReducer, initialState);

  // Set Active Tab
   const setActiveTab = tab => {
    dispatch({ type: SET_ACTIVE_TAB, payload: tab });
  }
  
  return (
    <NavbarContext.Provider
      value={{
        activeTab: state.activeTab,
        setActiveTab
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;