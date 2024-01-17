// import React, { useState } from 'react';
// import Sound from 'react-sound';
// import TheOtherSide from '../assets/music.mp3';

// function Playmusic() {
// //   const [isPlaying, setIsPlaying] = useState(false);

// //    const handlePlay = () => {
// //     setIsPlaying(true);
// //   };

// //   const handleSongFinishedPlaying = () => {
// //     // Handle song finished playing logic
// //     setIsPlaying(false);
// //   };

// const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);

// const handlePlay = () => {
//   setPlayStatus(Sound.status.PLAYING);
// };

// const handleStop = () => {
//   setPlayStatus(Sound.status.STOPPED);
// };

// const handleSongFinishedPlaying = () => {
//   // Handle song finished playing logic
//   setPlayStatus(Sound.status.STOPPED);
// };


//   return (
//     <div>
//          <button className='hidden'onClick={handlePlay} disabled={playStatus === Sound.status.PLAYING}>
//         Play Music
//       </button>
//       <button className='hidden'onClick={handleStop} disabled={playStatus !== Sound.status.PLAYING}>
//         Stop Music
//       </button>
//       {/* <Sound
//         url={TheOtherSide}
//         playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSE}
//         playFromPosition={300}
//         onFinishedPlaying={handleSongFinishedPlaying}
//       /> */}
//           <Sound
//         url={TheOtherSide}
//         playStatus={playStatus}
//         playFromPosition={0}
//         onFinishedPlaying={handleSongFinishedPlaying}
//       />
//     </div>
//   );
// }

// export default Playmusic;
