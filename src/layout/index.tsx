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
        <section className="header">
          <StyledHeader />
        </section>

        <section className="outlet">
          <Outlet />
        </section>

        <section className="footer">
          <StyledFooter />
        </section>
      </div>
    </>
  );
};

export { Layout };
