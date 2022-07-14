type HeaderProps = {
  className?: string;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is a header</p>
      </div>
    </>
  );
};

export { Header };

// type HeaderProps = {
//   className?: string;
// };

// const Header = (props: HeaderProps): JSX.Element => {
//   const { className } = props;

//   return (
//     <>
//       <div className={className}></div>
//     </>
//   );
// };

// export {Header};
