import { Suspense } from "react";

const Loadable = (Component) => {
  return function WrappedComponent(props) {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default Loadable;

// Loading UI
const LoadingScreen = () => {
  return (
    <div className="d-flex align-items-start justify-content-center mt-5">
      <div className="loader-main"></div>
    </div>
  );
};
