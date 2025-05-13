import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer({ isPlaying, stopMusic }) {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    if (audio) {
      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('loadedmetadata', onLoadedMetadata);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      }
    };
  }, [isPlaying]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const seekAudio = (e) => {
    const bar = progressBarRef.current;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;

    audioRef.current.currentTime = newTime;
  };

  return (
    <>
      <audio ref={audioRef} src={isPlaying.songUrl} autoPlay />
      <div className="text-white absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[70%] h-16 bg-gradient-to-r from-[#6483E1] to-[#AF2997] rounded-full shadow-lg inline-flex items-center px-4 justify-between">
        {/* Song Image and Info */}
        <div className="flex items-center gap-3">
          <img
            src={isPlaying.image}
            alt={isPlaying.title}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{isPlaying.title}</p>
          </div>
        </div>

        {/* Progress Bar & Duration */}
        <div className="flex-1 mx-5 flex flex-col justify-center cursor-pointer" onClick={seekAudio}>
          <div
            className="w-full h-1 bg-gray-300 rounded-full overflow-hidden"
            ref={progressBarRef}
          >
            <div
              className="bg-green-500 h-1"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-200 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Play/Pause and Close */}
        <div className="flex items-center gap-4">
          <button
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={togglePlayback}
          >
            <img
              src="https://img.icons8.com/ios-filled/24/play--v1.png"
              alt="play"
            />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={stopMusic}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/24/macos-close.png"
              alt="close"
            />
          </button>
        </div>
      </div>
    </>
  );
}
