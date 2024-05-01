export const ProfileDetailItems = ({
  title,
  count,
}: {
  title: string;
  count: number;
}) => (
  <article className="h-max w-max">
    <p className="w-full text-center text-base text-spotify-green">{count}</p>
    <h3 className="uppercase text-spotify-gray-100">{title}</h3>
  </article>
);
