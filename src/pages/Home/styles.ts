import styled from "styled-components";

import { HomePage } from "pages/Home";

export const StyledHomePage = styled(HomePage)`
  & {
    padding: 2rem 0;
    color: ${(props) => props.theme.dark.text};

    .container {
      padding: 0 10vw;
      display: flex;
      justify-content: space-between;
    }
  }
`;
