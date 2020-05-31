import React, { useContext, useEffect, useRef } from 'react';
import jazzMp3 from '../../assets/audios/jazzMp3.mp3';

import ProfileContext from '../../context/profile/profileContext';

const AudioPlayer = () => {
  const profileContext = useContext(ProfileContext);
  const { audioSettings, updateAudioSettings } = profileContext;

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
    let audioRefTemp = audioRef.current;

    if(audioRef && audioRef.current && audioSettings) {
      audioRef.current.currentTime = audioSettings.currentTime ?? 0;
      audioRef.current.volume = audioSettings.volume ?? 1;
    }

    return () => {
      const settings = {
        currentTime: audioRefTemp.currentTime,
        volume: audioRefTemp.volume
      };
  
      updateAudioSettings(settings)
    }
  }, [audioSettings, updateAudioSettings]);

  return (
    <audio controls loop autoPlay ref={audioRef}>
      <source src={jazzMp3} type="audio/mpeg" />
        Your browser dose not support the audio element
    </audio>
  );
}

export default AudioPlayer;
