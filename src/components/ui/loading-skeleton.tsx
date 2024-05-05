import loading_gif from '/loading.gif';
export const LoadingSkeleton = () => (
  <div className="mx-auto h-full w-full">
    <img
      src={loading_gif}
      alt="spotify loading gif animation"
      className="object-center"
    />
  </div>
);
