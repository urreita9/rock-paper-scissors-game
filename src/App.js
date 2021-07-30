import { GameProvider } from "./context/gameProvider";
import { Container } from "./components/Container";
export const App = () => {
  return (
    <GameProvider>
      <Container />
    </GameProvider>
  );
};
