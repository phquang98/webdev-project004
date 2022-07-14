type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is a footer</p>
      </div>
    </>
  );
};

export { Footer };
