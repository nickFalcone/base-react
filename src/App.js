import { render } from "react-dom";
import Title from "./Title";

const App = () => {
  return (
    <div>
      <Title title="Base React Template" />A template{" "}
      <a href="https://github.com/nickFalcone/base-react">repo</a> for React
      projects with ESLint, Prettier, and Babel already set up.
    </div>
  );
};

render(<App />, document.getElementById("root"));
