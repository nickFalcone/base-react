import { render } from "react-dom";
import Heading from "./Heading";
import Counter from "./Counter";
import GithubSearch from "./GithubSearch";
import MemoizedFib from "./Fibonacci";

const App = () => {
  return (
    <div>
      <Heading title="Base React" />
      <Counter />
      <GithubSearch />
      <MemoizedFib />
    </div>
  );
};

render(<App />, document.getElementById("root"));
