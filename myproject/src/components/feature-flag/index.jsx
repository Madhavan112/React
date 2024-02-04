import { FeatureFlagContext } from "./context";
import TicTacToe from "../tic-tac-toe";
import DarkLightTheme from "../light-dark-mode";
import { useContext } from "react";
export default function FeatureFlag() {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <DarkLightTheme />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
  ];
  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  if (loading) return <h1>Hello it is loading</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>

      {componentsToRender.map((item) =>
        checkEnabledFlags(item.key) ? item.component : null
      )}
    </div>
  );
}
