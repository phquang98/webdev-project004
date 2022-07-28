import styled from "styled-components";

import { ListSection } from "components/ListSection";

export const StyledListSection = styled(ListSection)`
  & {
    display: flex;
    flex-direction: column;

    .list-sec__header {
      flex: 1;
      padding: 1rem 0;
      text-align: center;
    }

    .list-sec__body {
      flex: 6;
    }

    .list-sec__footer {
      padding: 1rem 0;
      flex: 2;
    }
  }
`;
