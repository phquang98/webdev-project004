import styled from "styled-components";

import { Btn } from "components/Button";

export const StyledBtn = styled(Btn)`
  & {
    .btn {
      color: inherit;
      background-color: inherit;
      border: none;
      cursor: pointer;
    }
  }
`;
