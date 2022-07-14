import styled from "styled-components";

import { HomePage } from "pages/Home";

export const StyledHomePage = styled(HomePage)`
  & {
    color: ${(props) => props.theme.dark.text};
    font-size: 32px;
  }
`;
