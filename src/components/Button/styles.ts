import styled from "styled-components";

import { Btn } from "components/Button";

export const StyledBtn = styled(Btn)`
  & {
    .btn {
      color: ${(props) => (props.color ? `${props.color}` : "inherit")};
      background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : "inherit")};
      border: none;
      cursor: pointer;
    }
  }
`;
