import styled from "styled-components";

import { Layout } from "layout";

export const StyledLayout = styled(Layout)`
  & {
    background-color: ${(props) => props.theme.dark.primary};
  }
`;
