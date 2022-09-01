import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createDrawerNavigator
} from '@react-navigation/drawer';

import Home from './screens/home';
import CameraApp from './screens/camera';
import MapsApp from './screens/maps';
import NotificationsApp from './screens/notifications';

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
      </ Drawer.Navigator>
    </NavigationContainer>
  )
  
}