import { useState } from "react";
import LoadingContext from "./LoadingContext";

const LoadingState = (props) => {
  const [loading, setLoading] = useState(true);

  const value = {
    loading,
    setLoading,
  };
  return (
    <LoadingContext.Provider value={value}>
      {props.children}
    </LoadingContext.Provider>
  );
}

export default LoadingState;