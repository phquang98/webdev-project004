import styled from "styled-components";

import { Layout } from "layout";

export const StyledLayout = styled(Layout)`
  & {
    font-size: 16px;
    background-color: ${(props) => props.theme.dark.primary};

    .header {
      min-height: 10vh;
    }

    .outlet {
      min-height: 80vh;
    }

    .footer {
      min-height: 10vh;
    }
  }
`;
