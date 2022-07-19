import { StyledPaper } from "components/Paper/styles";

type TaskSectionProps = {
  className?: string;
};

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
            <ul className="task-sec__clt">
              <li>record todo list video</li>
              <li>edit todo list video</li>
              <li>publish todo list video</li>
            </ul>
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
