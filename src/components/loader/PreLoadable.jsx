import { Suspense, useState, useEffect } from "react";

const PreLoadable = (Component) => {
  return function WrappedComponent(props) {
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowComponent(true);
      }, 2000); // Delay of 2 seconds

      return () => clearTimeout(timer);
    }, []);

    return (
      <Suspense fallback={<LoadingScreen />}>
        {showComponent ? <Component {...props} /> : <LoadingScreen />}
      </Suspense>
    );
  };
};

export default PreLoadable;

// Loading UI
const LoadingScreen = () => {
  return (
    <div id="preloader-screen">
      <div id="preloader">
        <div id="loader"></div>
      </div>
    </div>
  );
};
