import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createDrawerNavigator
} from '@react-navigation/drawer';

import Home from 'src/screens/home';
import CameraApp from 'src/screens/camera';
import MapsApp from 'src/screens/maps';
import NotificationsApp from 'src/screens/notifications';
import SlideAnimation from 'src/screens/slideAnimation';
import SlideHorizontalAnimation from 'src/screens/slideHorizontalAnimation';

import 'react-native-gesture-handler';

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          name="Camera"
          component={CameraApp}
        />
        <Drawer.Screen
          name="Maps"
          component={MapsApp}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsApp}
        />
        <Drawer.Screen
          name="Slide Animation"
          component={SlideAnimation}
        />
        <Drawer.Screen
          name="Slide Horizontal Animation"
          component={SlideHorizontalAnimation}
        />
      </ Drawer.Navigator>
    </NavigationContainer>
  )
  
}