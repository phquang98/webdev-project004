import { useState, MouseEventHandler } from "react";

import { TList } from "types";

type ListItemProps = {
  className?: string;
  key: string;
} & Omit<TList, "taskClt">;

const ListItem = (props: ListItemProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const { className, name } = props;

  const toggleListHdlr: MouseEventHandler<HTMLButtonElement> = (_evt) => {
    setActive(!active);
  };

  if (active) {
    return (
      <>
        <div className={className}>
          <button className="task-list__item--active" onClick={toggleListHdlr}>
            {name}
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={className}>
        <button className="task-list__item" onClick={toggleListHdlr}>
          {name}
        </button>
      </div>
    </>
  );
};

export { ListItem };
