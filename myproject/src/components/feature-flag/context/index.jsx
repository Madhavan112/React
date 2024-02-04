import { createContext, useEffect, useState } from "react";
import DataOwner from "../data";
export const FeatureFlagContext = createContext(null);
export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});
  async function fetchFeatureFlag() {
    try {
      setLoading(true);
      const response = await DataOwner();
      setEnabledFlags(response);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchFeatureFlag();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
