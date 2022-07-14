import { Route, Routes } from "react-router-dom";

import { StyledLayout } from "layout/styles";
import { StyledHomePage } from "pages/Home/styles";
import { StyledNotFoundPage } from "pages/NotFound/styles";

const AppRoute = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledLayout />}>
          <Route index element={<StyledHomePage />}></Route>
        </Route>
        <Route path="*" element={<StyledNotFoundPage />}></Route>
      </Routes>
    </>
  );
};

export default AppRoute;
