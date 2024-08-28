import {createTheme} from '@shopify/restyle';
import {BASE_BORDER_RADII} from './elements/borderRadii';
import {BASE_COLORS} from './elements/colors';
import {BASE_GRADIENTS} from './elements/gradients';
import {BASE_SPACING} from './elements/spacing';
import {TEXT_VARIANTS} from './elements/textVariants';

export const baseTheme = createTheme({
  colors: BASE_COLORS,
  gradients: BASE_GRADIENTS,
  spacing: BASE_SPACING,
  textVariants: TEXT_VARIANTS,
  borderRadii: BASE_BORDER_RADII,
});
