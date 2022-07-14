type HeaderProps = {
  className?: string;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <h1>Todo Application</h1>
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
