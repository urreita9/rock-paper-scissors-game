import { Title } from "./components/Title";
import { Options } from "./components/Options";
import { GameProvider } from "./context/gameProvider";
export const App = () => {
  return (
    <GameProvider>
      <div className="container">
        <Title />
        <Options />
        <div></div>
      </div>
    </GameProvider>
  );
};
