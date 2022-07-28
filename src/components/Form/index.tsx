import { FaPlus } from "react-icons/fa";

type FormProps = {
  className?: string;
};

const Form = (props: FormProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <form action="">
          <button>
            <FaPlus />
          </button>
          <input type="text" placeholder="New list name..." required />
        </form>
      </div>
    </>
  );
};

export { Form };
