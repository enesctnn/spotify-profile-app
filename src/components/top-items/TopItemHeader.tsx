export const TopItemHeader = ({
  title,
  selectedRange,
  onClick,
}: {
  title: 'Top Artists' | 'Top Tracks';
  selectedRange: 'short_term' | 'medium_term' | 'long_term';
  onClick: (time_range: 'short_term' | 'medium_term' | 'long_term') => void;
}) => (
  <header className="items-center justify-between gap-1 max-md:space-y-5 md:flex">
    <h1 className="text-center text-xl font-bold">{title}</h1>
    <menu className="flex items-center justify-evenly gap-3 text-sm font-semibold">
      <button
        className={`decoration-2 underline-offset-4 opacity-60 transition-all hover:opacity-100 ${selectedRange === 'long_term' ? ' underline !opacity-100' : ''}`}
        onClick={() => onClick('long_term')}
      >
        All Time
      </button>
      <button
        className={`decoration-2 underline-offset-4 opacity-60 transition-all hover:opacity-100 ${selectedRange === 'medium_term' ? ' underline !opacity-100' : ''}`}
        onClick={() => onClick('medium_term')}
      >
        Last 6 Months
      </button>
      <button
        className={`decoration-2 underline-offset-4 opacity-60 transition-all hover:opacity-100 ${selectedRange === 'short_term' ? ' underline !opacity-100' : ''}`}
        onClick={() => onClick('short_term')}
      >
        Last 4 Weeks
      </button>
    </menu>
  </header>
);
