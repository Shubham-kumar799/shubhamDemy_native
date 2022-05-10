import React from 'react';

//Components
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Divider, Drawer, Button } from 'react-native-paper';
import ThemeToggler from './ThemeToggler';

//Utils
import { DrawerItemList } from '@react-navigation/drawer';
import { staticTheme } from '../../config/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import { firebaseAuth } from '../../../firebase';
import { signOut } from 'firebase/auth';

const DrawerComponent = ({ ...props }) => {
  const user = useSelector(selectUser);

  const logoutUser = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (err) {
      console.log('err in logout', err);
      console.log(err?.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={125}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWZfCv7Kv2jSyaWB5GTw83hLALgdfLykkUg&usqp=CAU',
          }}
        />
      </View>
      <View style={styles.themeTogglerContainer}>
        <ThemeToggler />
      </View>
      <Divider />
      <DrawerItemList {...props} />
      <Drawer.Section title="COMMUNICATE">
        <Drawer.Item
          icon="telegram"
          label="Telegram"
          onPress={() => console.log('second')}
        />
        <Drawer.Item
          icon="instagram"
          label="Instagram"
          onPress={() => console.log('second')}
        />
        <Drawer.Item
          icon={({ color, size }) => (
            <MaterialIcons name="feedback" size={size} color={color} />
          )}
          label="Send Feedback"
          onPress={() => console.log('second')}
        />
      </Drawer.Section>
      <Drawer.Item
        style={styles.secondaryText}
        label="About Us"
        onPress={() => console.log('second')}
      />
      <Drawer.Item label="Contact Us" onPress={() => console.log('second')} />
      {user && (
        <>
          <Divider />
          <View style={styles.logoutButtonContainer}>
            <Button mode="outlined" onPress={() => logoutUser()}>
              Logout
            </Button>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: staticTheme.sizes['5xl'],
    padding: staticTheme.sizes['3xl'],
  },
  themeTogglerContainer: {
    position: 'absolute',
    top: '20%',
    right: '10%',
  },
  logoutButtonContainer: {
    margin: staticTheme.sizes['xl'],
  },
});

export default DrawerComponent;
