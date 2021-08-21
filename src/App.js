import { render } from "react-dom";
import Heading from "./Heading";
import Counter from "./Counter";
import GithubSearch from "./GithubSearch";

const App = () => {
  return (
    <div>
      <Heading title="Base React" />
      <Counter />
      <GithubSearch />
    </div>
  );
};

render(<App />, document.getElementById("root"));
