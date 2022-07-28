import styled from "styled-components";

import { Paper } from "components/Paper";

export const StyledPaper = styled(Paper)`
  & {
    background-color: ${(props) => props.bgColor};
    width: ${(props) => `${props.width}rem`};
    height: ${(props) => `${props.height}rem`};
  }
`;
