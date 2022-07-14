import "styled-components";

import { customTheme } from "styles";

declare module "styled-components" {
  type TCustomTheme = typeof customTheme;

  export interface DefaultTheme extends TCustomTheme {}
}

// Explain: s-cpn provide an empty obj DefaultTheme from `props.theme`, here we declaration merging to expand the `theme` props -> TS can autocomplete our desired props inside props.theme
// Read:
// - <https://styled-components.com/docs/api#typescript>
// - <https://blog.agney.dev/styled-components-&-typescript/>
