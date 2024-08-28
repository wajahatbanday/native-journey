import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

type NavBarIconProps = {
  name: string;
  focused: boolean;
};

export const NavBarIcon: React.FC<NavBarIconProps> = ({name, focused}) => {
  const iconMap: Record<string, any> = {
    Home: require('../../../images/home.png'),
    Search: require('../../../images/search.png'),
    Discover: require('../../../images/discover.png'),
    Profile: require('../../../images/profile.png'),
  };

  const icon = iconMap[name] || iconMap.Home;

  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.icon, {tintColor: focused ? 'white' : 'gray'}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
