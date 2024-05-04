export const TrackFeatures = (tableData: {
  duration: string;
  key_note: string | null;
  tempo: string;
  time_signature: number;
  modality: string;
  popularity: string;
}) => (
  <article className="grid w-full grid-cols-3 gap-1">
    {Object.keys(tableData).map(item => (
      <section
        key={item}
        className={
          'space-y-1 p-2 text-center text-spotify-gray-100 outline outline-1'
        }
      >
        <p className="text-2xl font-extrabold">
          {tableData[item as keyof typeof tableData]}
        </p>
        <h2 className="text-sm font-bold capitalize">
          {item.split('_').join(' ')}
        </h2>
      </section>
    ))}
  </article>
);
