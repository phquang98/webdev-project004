import { StyledListSection } from "components/ListSection/styles";
import { StyledTaskSection } from "components/TaskSection/styles";

type HomePageProps = {
  className?: string;
};

const HomePage = (props: HomePageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <div className="container">
          <StyledListSection />
          <StyledTaskSection />
        </div>
      </div>
    </>
  );
};

export { HomePage };
