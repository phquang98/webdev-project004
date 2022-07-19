import styled from "styled-components";

import { TaskSection } from "components/TaskSection";

export const StyledTaskSection = styled(TaskSection)`
  & {
    .task-sec__header {
      height: 20%;
      padding: 1rem 0;
      display: flex;
      justify-content: space-around;
      align-items: center;

      p {
        font-size: 1rem;
      }
    }

    .task-sec__body {
      height: 60%;
    }

    .task-sec__footer {
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
