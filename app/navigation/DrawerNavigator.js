import React, { useState, useEffect } from 'react';

//components
import { DrawerComponent, Loader } from '../components/Global';

//screens
import HomeStack from '../screens/Home';
import AuthStack from '../screens/Auth';
import { Settings } from '../screens/Settings';
import { UserProfileScreen } from '../screens/Profile';

//utils
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { selectUser, Login, Logout } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { firebaseAuth } from '../../firebase';

// icons
import { Feather, FontAwesome } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const user = useSelector(selectUser);
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();

  const onAuthStateChanged = user => {
    if (user) {
      dispatch(
        Login({ email: user.email, token: user.stsTokenManager.accessToken })
      );
    } else {
      dispatch(Logout());
    }
    setInitialized(true);
  };

  useEffect(() => {
    const subscriber = firebaseAuth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!initialized) return <Loader />;

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerComponent {...props} />}
      initialRouteName="Auth"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
        component={Settings}
      />
      {user ? (
        <Drawer.Screen
          name="Profile"
          component={UserProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="user-circle-o" size={size} color={color} />
            ),
            headerTitle: 'My Profile',
            drawerLabel: 'My profile',
          }}
        />
      ) : (
        <Drawer.Screen
          name="Auth"
          component={AuthStack}
          options={{
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="sign-in" size={size} color={color} />
            ),
            drawerLabel: 'Login / SignUp',
          }}
        />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
