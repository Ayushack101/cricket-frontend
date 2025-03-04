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
    <div style={styles.container}>
      <div className="loader"></div> {/* Add CSS for animation */}
      <p>Loading...</p>
    </div>
  );
};

// Inline styles (or move to a CSS file)
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "50vh",
    flexDirection: "column",
    fontSize: "18px",
    fontWeight: "bold",
  },
};
