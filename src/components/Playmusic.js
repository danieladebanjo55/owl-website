import React, { useState } from 'react';
import Sound from 'react-sound';
import TheOtherSide from '../assets/music.mp3';

function Playmusic() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleSongFinishedPlaying = () => {
    // Handle song finished playing logic
    setIsPlaying(false);
  };

  return (
    <div>
      {/* <button onClick={handlePlay}>Play Music</button> */}
      <Sound
        url={TheOtherSide}
        playStatus={isPlaying && Sound.status.PLAYING}
        playFromPosition={300}
        // onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
}

export default Playmusic;
