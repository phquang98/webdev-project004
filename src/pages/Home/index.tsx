import { StyledListSection } from "components/ListSection/styles";

type HomePageProps = {
  className?: string;
};

const HomePage = (props: HomePageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <div>This is the Home Page</div>
        <div className="container">
          <StyledListSection />
        </div>
      </div>
    </>
  );
};

export { HomePage };
