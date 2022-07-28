import styled from "styled-components";

import { Form } from "components/Form";

export const StyledForm = styled(Form)`
  & {
    .form {
      padding: 0 0 0 5%;
      display: flex;

      .form__btn {
        padding: 0 1rem 0 0;
        border: none;
        font-size: 1rem;
        font-weight: 900;
        cursor: pointer;
        background-color: inherit;
        color: inherit;
      }

      .form__ipt {
        padding: 0.25rem;
        border: 0;
        color: inherit;
        background: transparent;
        outline: none;
        border-bottom: 1px solid currentColor; // NOTE: https://stackoverflow.com/a/34667435/8834000
        transition: border-bottom 100ms ease-in;

        :focus {
          border-bottom: 2px solid currentColor;
        }
      }
    }
  }
`;
