import styled from "styled-components";

import { TaskSection } from "components/TaskSection";

export const StyledTaskSection = styled(TaskSection)`
  & {
    color: ${(props) => props.theme.light.text};

    .task-sec__header {
      background-color: ${(props) => props.theme.light.beta};
      height: 20%;
      padding: 1rem 0;
      display: flex;
      justify-content: space-around;
      align-items: center;

      p {
        font-size: 1rem;
        opacity: 0.75; // IMPROVE: change colorVar brightness programmatically
      }
    }

    .task-sec__body {
      background-color: ${(props) => props.theme.light.alpha};
      height: 60%;
      padding: 1rem 5%;

      .task-sec__item {
        display: flex;
        padding: 0.5rem 0;

        .task-sec__item-desc {
          padding: 0 0 0 1rem;
        }
      }
    }

    .task-sec__footer {
      height: 20%;
      background-color: ${(props) => props.theme.light.beta};
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
