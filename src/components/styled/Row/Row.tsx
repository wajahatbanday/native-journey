import React from 'react';
import {Box, BoxProps} from '../Box';

export const Row: React.FC<BoxProps> = props => {
  return (
    <Box flexDirection={'row'} {...props}>
      {props.children}
    </Box>
  );
};
