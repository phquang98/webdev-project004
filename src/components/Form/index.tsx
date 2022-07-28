import { MouseEventHandler } from "react";
import { FaPlus } from "react-icons/fa";

type FormProps = {
  className?: string;
};

const testLabelClickDel: MouseEventHandler<HTMLButtonElement> = (_evt) => {
  console.log("btn clicked!");
};

const Form = (props: FormProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <form className="form" action="">
          <button className="form__btn" onClick={testLabelClickDel}>
            <FaPlus />
          </button>
          <input className="form__ipt" type="text" placeholder="List name" required />
        </form>
      </div>
    </>
  );
};

export { Form };
