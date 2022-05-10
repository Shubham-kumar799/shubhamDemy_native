//utils
import React from 'react';

//components
import { StyleSheet, View, Image } from 'react-native';

const Header = ({ image }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: image.Location }} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 225,
    width: '100%',
    resizeMode: 'contain',
  },
});

export default Header;
