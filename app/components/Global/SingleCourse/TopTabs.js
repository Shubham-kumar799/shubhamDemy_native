//utils
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { staticTheme } from '../../../config/theme';

//components
import SingleCourseViewLessons from './SingleCourseViewLessons';
import SingleCourseViewDescription from './SingleCourseViewDescription';
import CourseHighlights from './CourseHighlights';

const Tab = createMaterialTopTabNavigator();

const TopTabs = ({
  title,
  description,
  createdAt,
  updatedAt,
  instructor,
  price,
  paid,
  lessons,
}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          flexDirection: 'row',
          overflow: 'hidden',
        },
        tabBarStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          overflow: 'hidden',
        },
        tabBarPressColor: 'transparent',
        tabBarLabelStyle: {
          fontWeight: staticTheme.fontWeights.bold,
        },
        tabBarActiveTintColor: staticTheme.colors.primary,

        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Tab.Screen
        name="SingleCourseViewDescription"
        component={SingleCourseViewDescription}
        initialParams={{
          title,
          description,
          createdAt,
          updatedAt,
          instructor,
          price,
          paid,
        }}
        options={{
          tabBarLabel: 'OverView',
        }}
      />
      <Tab.Screen
        name="SingleCourseViewLessons"
        component={SingleCourseViewLessons}
        initialParams={{ lessons }}
        options={{
          tabBarLabel: 'Lessons',
        }}
      />
      <Tab.Screen name="HighLights" component={CourseHighlights} />
    </Tab.Navigator>
  );
};

export default TopTabs;
