import React, { useContext, useEffect, useRef } from 'react';
import jazzMp3 from '../../assets/audios/jazzMp3.mp3';
import jazzOgg from '../../assets/audios/jazzOgg.ogg';

import ProfileContext from '../../context/profile/profileContext';

const AudioPlayer = () => {
  const profileContext = useContext(ProfileContext);
  const { audioSettings, updateAudioSettings } = profileContext;

  const audioRef = useRef(null);

  useEffect(() => {
    const audioRefTemp = audioRef.current;

    if(audioRefTemp && audioSettings) {
      audioRefTemp.currentTime = audioSettings.currentTime ?? 0;
      audioRefTemp.volume = audioSettings.volume ?? 1;
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
      <source src={jazzOgg} type="audio/ogg" />
      <source src={jazzMp3} type="audio/mpeg" />
        Your browser dose not support the audio element
    </audio>
  );
}

export default AudioPlayer;
