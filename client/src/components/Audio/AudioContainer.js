import React, { useContext } from 'react';
import AudioPlayer from './AudioPlayer';

import ProfileContext from '../../context/profile/profileContext';

const AudioContainer = () => {
  const profileContext = useContext(ProfileContext);
  const { isMusic, toggleMusic } = profileContext;

  return (
    <div className="audio-container">
      <div className="audio-command">
        <i className={`fas ${isMusic ? 'fa-stop' : 'fa-play'}`} onClick={toggleMusic}></i>
      </div>

      {
        isMusic &&
        <AudioPlayer />
      }
    </div>
  );
}

export default AudioContainer;
