import {createTheme} from '@shopify/restyle';
import {baseTheme} from '../baseTheme';
import {LIGHT_COLORS} from '../elements/colors';

export const lightTheme = createTheme({
  ...baseTheme,
  colors: LIGHT_COLORS,
});
