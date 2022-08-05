import styled from "styled-components";

import { ListItem } from "components/ListItem";

export const StyledListItem = styled(ListItem)`
  & {
    button {
      background: none;
      border: none;
      cursor: pointer;
      color: white;
    }

    .task-list__item {
    }

    .task-list__item--active {
      font-weight: bold;
    }
  }
`;
