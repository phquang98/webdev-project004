import { Direction } from "utils/constants";

type HomePageProps = {
  className?: string;
};

const HomePage = (props: HomePageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <div>This is the Home Page</div>
        <p>
          Look {Direction.Left} and {Direction.Right} when crossing a road!
        </p>
      </div>
    </>
  );
};

export { HomePage };
