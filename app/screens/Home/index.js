//utils
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

//components
import HomeScreen from './HomeScreen';
import SingleCourseScreen from './SingleCourseScreen';
import { IconButton } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleCourseScreen"
        component={SingleCourseScreen}
        options={{
          headerRight: ({ color }) => (
            <IconButton
              icon="heart-outline"
              color={color}
              size={25}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: () => {},
          headerLeft: ({ color }) => (
            <IconButton
              icon="arrow-left-circle"
              color={color}
              size={25}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
