import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createStackNavigator
} from '@react-navigation/stack'

import Home from './screens/home';
import Camera from './screens/camera';
import Maps from './screens/maps';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="Camera"
          component={Camera}
        />
        <Screen
          name="Maps"
          component={Maps}
        />
      </Navigator>
    </NavigationContainer>
  )
}