//utils
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';

//icons

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="signInScreen" component={SignInScreen} />
      <Stack.Screen name="signUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
