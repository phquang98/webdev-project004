import { StyledForm } from "components/Form/styles";
import { StyledPaper } from "components/Paper/styles";

type ListSectionProps = {
  className?: string;
};

const ListSection = (props: ListSectionProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledPaper width={20} height={20} className="list-sec__container">
          <h3 className="list-sec__title">My lists</h3>

          <ul className="list-clt">
            <li>Youtube</li>
            <li>Work</li>
            <li>Grocery</li>
          </ul>

          <div className="list-sec__footer">
            <StyledForm />
          </div>
        </StyledPaper>
      </div>
    </>
  );
};

export { ListSection };
