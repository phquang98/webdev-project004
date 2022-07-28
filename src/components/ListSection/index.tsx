import { StyledForm } from "components/Form/styles";
import { StyledPaper } from "components/Paper/styles";

import { customTheme } from "styles";

type ListSectionProps = {
  className?: string;
};

const ListSection = (props: ListSectionProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledPaper bgColor={customTheme.dark.gamma} width={20} height={20}>
          <h3 className="list-sec__header">My lists</h3>

          <ul className="list-sec__body">
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
