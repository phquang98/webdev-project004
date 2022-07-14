import { Outlet } from "react-router-dom";

import { StyledFooter } from "components/Footer/styles";
import { StyledHeader } from "components/Header/styles";

type LayoutProps = {
  className?: string;
};

const Layout = (props: LayoutProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledHeader />
        <Outlet />
        <StyledFooter />
      </div>
    </>
  );
};

export { Layout };
