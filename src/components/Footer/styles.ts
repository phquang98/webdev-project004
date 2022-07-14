import styled from "styled-components";

import { Footer } from "components/Footer";

export const StyledFooter = styled(Footer)`
  & {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${(props) => props.theme.dark.text};
    background-color: ${(props) => props.theme.dark.auxiliary};
  }
`;
