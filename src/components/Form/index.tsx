import { useListClt } from "hooks/useListClt";
import { useEffect, useState, ChangeEventHandler, MouseEventHandler } from "react";
import { FaPlus } from "react-icons/fa";

import { TList } from "types";

type FormProps = {
  className?: string;
};

const Form = (props: FormProps): JSX.Element => {
  const { className } = props;

  const [iptData, setIptData] = useState<string>("");
  const [listClt, setAddOne] = useListClt();

  const inputChangeHdlr: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setIptData(evt.currentTarget.value);
  };

  const btnClickHdlr: MouseEventHandler<HTMLButtonElement> = (evt) => {
    console.log("iptData", iptData);
    if (iptData) {
      const tmpListRecord: TList = {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        id: Math.floor(Math.random() * 10).toString(),
        name: iptData,
        taskClt: []
      };
      setAddOne(tmpListRecord);
    }
  };

  // TODO: change btn icon to cpn btn
  return (
    <>
      <div className={className}>
        <div className="form">
          <button className="form__btn" onClick={btnClickHdlr}>
            <FaPlus />
          </button>
          <input className="form__ipt" type="text" placeholder="List name" required onChange={inputChangeHdlr} />
        </div>
      </div>
    </>
  );
};

export { Form };
