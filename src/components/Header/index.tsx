import { MouseEventHandler } from "react";
import { FaCoins } from "react-icons/fa";

import { StyledBtn } from "components/Button/styles";

type HeaderProps = {
  className?: string;
};

const clickHeaderBtn: MouseEventHandler = (evt) => {
  console.log("btn click from Header");
};

const Header = (props: HeaderProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledBtn btnClickHdlr={clickHeaderBtn}>
          <FaCoins />
        </StyledBtn>
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
