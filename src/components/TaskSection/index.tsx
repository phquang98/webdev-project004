import { MouseEventHandler } from "react";
import { GrCheckbox, GrCheckboxSelected, GrTrash } from "react-icons/gr";
import { FaCoins } from "react-icons/fa";

import { StyledPaper } from "components/Paper/styles";
import { TTask } from "types";
import { customTheme } from "styles";
import { StyledBtn } from "components/Button/styles";

type TaskSectionProps = {
  className?: string;
};

const dumpDelThis: TTask[] = [
  { id: "1", desc: "record todo list video", status: "finished" },
  { id: "2", desc: "edit todo list video", status: "unfinished" },
  { id: "3", desc: "delete todo list video", status: "unfinished" },
  { id: "4", desc: "create todo list video", status: "unfinished" }
];

const clickTaskSecBtnDelThis: MouseEventHandler = (_evt) => {
  console.log("btn click from TaskSec");
};

const TaskSection = (props: TaskSectionProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledPaper bgColor={customTheme.dark.gamma} width={20} height={20}>
          <div className="task-sec__wrapper">
            <section className="task-sec__header">
              <h3>Youtube</h3>
              <p>2 tasks remaining</p>
            </section>

            <section className="task-sec__body">
              {dumpDelThis.map((ele) => {
                return (
                  <div key={ele.id} className="task-sec__item">
                    {/* IMPROVE: use input + label combo */}
                    {ele.status === "unfinished" ? <GrCheckbox /> : <GrCheckboxSelected />}
                    <label className="task-sec__item-desc">{ele.desc}</label>
                  </div>
                );
              })}
            </section>

            <section className="task-sec__footer">
              <StyledBtn
                btnClickHdlr={clickTaskSecBtnDelThis}
                btnText="Complete All"
                color={customTheme.dark.text}
                bgColor={customTheme.tealAlpha}
                hoverBgColor={customTheme.tealBeta}
              >
                {/* <GrCheckboxSelected /> */}
                <FaCoins />
              </StyledBtn>
              <StyledBtn
                btnClickHdlr={clickTaskSecBtnDelThis}
                btnText="Delete List"
                color={customTheme.dark.text}
                bgColor={customTheme.redAlpha}
                hoverBgColor={customTheme.redBeta}
              >
                {/* <GrTrash /> */}
                <FaCoins />
              </StyledBtn>
            </section>
          </div>
        </StyledPaper>
      </div>
    </>
  );
};

export { TaskSection };
