import loading_gif from '/loading.gif';
export const LoadingSkeleton = () => (
  <div className="h-full w-full">
    <img
      src={loading_gif}
      alt="spotify loading gif animation"
      className="mx-auto object-cover object-center"
    />
  </div>
);
