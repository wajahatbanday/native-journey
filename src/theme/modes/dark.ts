import {createTheme} from '@shopify/restyle';

import {baseTheme} from '../baseTheme';
import {DARK_COLORS} from '../elements/colors';

export const darkTheme = createTheme({
  ...baseTheme,
  colors: DARK_COLORS,
});
