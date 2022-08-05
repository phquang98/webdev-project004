import { StyledForm } from "components/Form/styles";
import { StyledListItem } from "components/ListItem/styles";
import { StyledPaper } from "components/Paper/styles";

import { customTheme } from "styles";
import { TList } from "types";

type ListSectionProps = {
  className?: string;
};

const delListDump: TList[] = [
  {
    id: "1",
    name: "Youtube",
    taskClt: []
  },
  {
    id: "2",
    name: "Study",
    taskClt: []
  },
  {
    id: "3",
    name: "Grocery shopping",
    taskClt: []
  }
];

const ListSection = (props: ListSectionProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledPaper bgColor={customTheme.dark.gamma} width={20} height={20}>
          <div className="list-sec__wrapper">
            <section className="list-sec__header">
              <h3>My lists</h3>
            </section>

            <section className="list-sec__body">
              {delListDump.map((ele) => {
                return <StyledListItem key={ele.id} className="list-sec__item" name={ele.name} id={ele.id} />;
              })}
            </section>

            <section className="list-sec__footer">
              <StyledForm />
            </section>
          </div>
        </StyledPaper>
      </div>
    </>
  );
};

export { ListSection };
