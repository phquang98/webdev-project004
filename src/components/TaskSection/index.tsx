import { GrCheckbox } from "react-icons/gr";

import { StyledPaper } from "components/Paper/styles";
import { TTask } from "types";

type TaskSectionProps = {
  className?: string;
};

const dumpDelThis: TTask[] = [
  { id: "1", desc: "record todo list video", status: "finished" },
  { id: "2", desc: "edit todo list video", status: "unfinished" },
  { id: "3", desc: "delete todo list video", status: "unfinished" }
];

const TaskSection = (props: TaskSectionProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledPaper width={20} height={20}>
          <section className="task-sec__header">
            <h3>Youtube</h3>
            <p>2 tasks remaining</p>
          </section>

          <section className="task-sec__body">
            {dumpDelThis.map((ele) => {
              return (
                <div key={ele.id} className="task-sec__item">
                  <GrCheckbox />
                  <p className="task-sec__item-desc">{ele.desc}</p>
                </div>
              );
            })}
          </section>

          <section className="task-sec__footer">
            <button>Delete the whole task</button>
          </section>
        </StyledPaper>
      </div>
    </>
  );
};

export { TaskSection };
