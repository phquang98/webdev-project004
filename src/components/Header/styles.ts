import styled from "styled-components";

import { Header } from "components/Header";

export const StyledHeader = styled(Header)`
  & {
    padding: 1rem 0;
    color: ${(props) => props.theme.dark.text};
    background-color: ${(props) => props.theme.dark.alpha};
    display: flex;
    justify-content: center;
  }
`;
