import { Direction } from "utils/constants";

var asd = 1;

const App = (): JSX.Element => {
  return (
    <>
      <div>Hello there!</div>
      <p>
        Look {Direction.Left} and {Direction.Right} when crossing a road!
      </p>
    </>
  );
};

export default App;
