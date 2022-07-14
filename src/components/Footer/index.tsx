type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>Personal project by phquang98.</p>
        <p>Checkout my Github page at: https://github.com/phquang98</p>
      </div>
    </>
  );
};

export { Footer };
