import { StyledPaper } from "components/Paper/styles";

type ListSectionProps = {
  className?: string;
};

const ListSection = (props: ListSectionProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledPaper width={20} height={20}>
          <h3 className="list-sec__title">My lists</h3>
          <ul className="list-clt">
            <li>Youtube</li>
            <li>Work</li>
            <li>Grocery</li>
          </ul>
        </StyledPaper>
      </div>
    </>
  );
};

export { ListSection };
