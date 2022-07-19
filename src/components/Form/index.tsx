type FormProps = {
  className?: string;
};

const Form = (props: FormProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <form action="">
          <input type="text" placeholder="New list name..." />
          <button>+</button>
        </form>
      </div>
    </>
  );
};

export { Form };
