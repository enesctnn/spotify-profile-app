import * as React from 'react';
import { AiOutlineMuted, AiOutlineSound } from 'react-icons/ai';
import { FaPause, FaPlay } from 'react-icons/fa';
import { AudioProgressBar } from './AudioProgressBar';

interface TrackAudioPlayerProps
  extends React.AudioHTMLAttributes<HTMLAudioElement> {
  track_name: string;
  artists: string[];
}

export const TrackAudioPlayer = ({
  artists,
  src,
  track_name,
  ...props
}: TrackAudioPlayerProps) => {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const [currentProgress, setCurrentProgress] = React.useState<number>(0);
  const [maxProgress, setMaxProgress] = React.useState<number>(0);
  const [volume, setVolume] = React.useState<number>(10);
  const [isMuted, setIsMuted] = React.useState<boolean>(false);
  const [isPaused, setIsPaused] = React.useState<boolean>(true);

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = volume / 100;
      setMaxProgress(audio.duration);
    }
  };

  const onDurationChange = (
    e: React.SyntheticEvent<HTMLAudioElement, Event>
  ) => {
    setCurrentProgress(e.currentTarget.currentTime);
  };

  const onProgressChange = (range: number) => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.currentTime = range;
    }
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      setVolume(+e.currentTarget.value);
      const audio = audioRef.current;
      audio.volume = +e.currentTarget.value / 100;
    }
  };

  React.useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.muted = isMuted;
    }
  }, [isMuted]);

  React.useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      if (isPaused) audio.pause();
      else audio.play();
    }
  }, [isPaused]);

  return (
    <div className="flex w-max gap-4 rounded-md border-2 px-5 py-3 shadow-md shadow-black">
      <button
        className="flex"
        onClick={() => setIsPaused(prevState => !prevState)}
      >
        {isPaused && <FaPlay size={20} className="animate-bump" />}
        {!isPaused && <FaPause size={20} className="animate-bump" />}
      </button>
      <AudioProgressBar
        currentProgress={currentProgress}
        maxProgress={maxProgress}
        onChange={onProgressChange}
      />
      <div className="group relative flex">
        <button onClick={() => setIsMuted(prevState => !prevState)}>
          {isMuted && <AiOutlineMuted size={20} />}
          {!isMuted && <AiOutlineSound size={20} />}
        </button>
        <input
          type="range"
          className="absolute -left-7 bottom-14 w-20 -rotate-90 scale-0 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
          name="volume_button"
          id="volume_button"
          min={0}
          max={100}
          value={volume}
          onChange={onVolumeChange}
        />
      </div>
      <audio
        {...props}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onDurationChange}
        aria-label={
          'Plays the song named ' +
          track_name +
          ' inline, by ' +
          artists.join('-')
        }
      >
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
};
