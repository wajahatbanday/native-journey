import React from 'react';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import {createBox, BoxProps as RestyleBoxProps} from '@shopify/restyle';
import {AppTheme} from '../../../theme';

export type CenteredProps = {
  verticallyCentered?: boolean;
  horizontallyCentered?: boolean;
  centered?: boolean;
};

export type BoxProps = ViewProps &
  RestyleBoxProps<AppTheme> &
  CenteredProps & {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
  };

const BaseBox = createBox<AppTheme>();

export const Box: React.FC<BoxProps> = ({
  verticallyCentered,
  horizontallyCentered,
  centered,
  children,
  ...rest
}) => {
  const boxProps = {
    ...rest,
    justifyContent:
      centered || verticallyCentered ? 'center' : rest.justifyContent,
    alignItems: centered || verticallyCentered ? 'center' : rest.alignItems,
  };
  return <BaseBox {...boxProps}>{children}</BaseBox>;
};
