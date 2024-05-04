import { getMinutesFromSeconds } from '../../lib/time';

export function AudioProgressBar({
  maxProgress,
  currentProgress,
  onChange,
}: {
  maxProgress: number;
  currentProgress: number;
  onChange: (value: number) => void;
}) {
  const currentDuration = getMinutesFromSeconds(currentProgress);
  const totalDuration = getMinutesFromSeconds(maxProgress);

  return (
    <div className="flex w-max items-center justify-center gap-3  overflow-hidden">
      <span className="w-12 shrink-0">{currentDuration}</span>
      <input
        type="range"
        name="audio_duration"
        id="audio_duration"
        max={maxProgress}
        value={currentProgress}
        onChange={e => onChange(+e.currentTarget.value)}
        className="w-20 accent-spotify-green-100 lg:w-36"
      />
      <span className="w-12 shrink-0">{totalDuration}</span>
    </div>
  );
}
