import styled from "styled-components";

import { Btn } from "components/Button";

export const StyledBtn = styled(Btn)`
  & {
    .btn {
      width: 120%;
      height: 2.25rem;
      color: ${(props) => (props.color ? `${props.color}` : "inherit")};
      background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : "inherit")};
      border: none;
      cursor: pointer;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
        0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
      transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);

      :hover {
        background-color: ${(props) => (props.hoverBgColor ? `${props.hoverBgColor}` : "inherit")};
      }

      .btn__icon {
        padding: 0 0.5rem 0 0;
        color: ${(props) => (props.color ? `${props.color}` : "inherit")};
      }
    }
  }
`;
