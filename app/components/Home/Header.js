//utils
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { staticTheme } from '../../config/theme';

//components
import { View, StyleSheet, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import { ThemeToggler } from '../Global';

const Header = () => {
  const { isThemeDark } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon="menu"
          color={isThemeDark ? 'white' : 'black'}
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View>
        <Image
          resizeMode="contain"
          style={{ height: 150, width: 150 }}
          source={require('../../assets/logo_500_no_bg.png')}
        />
      </View>
      <View>
        <ThemeToggler />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: staticTheme.sizes['3xs'],
    marginRight: staticTheme.sizes['3xs'],
  },
});

export default Header;
