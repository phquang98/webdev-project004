import styled from "styled-components";

import { ListSection } from "components/ListSection";

export const StyledListSection = styled(ListSection)`
  & {
    .list-sec__container {
      display: flex;
      flex-direction: column;
    }

    .list-sec__title {
      flex: 1;
      padding: 1rem 0;
      text-align: center;
    }

    .list-clt {
      flex: 6;
    }

    .list-sec__footer {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
