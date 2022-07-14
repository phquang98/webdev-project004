type NotFoundProps = {
  className?: string;
};

const NotFoundPage = (props: NotFoundProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <div>This is the Not Found Page</div>
        <p>Error 404!</p>
      </div>
    </>
  );
};

export { NotFoundPage };
