import { 
  View, 
  Text,
  Button 
} from 'react-native';

import styles from './style';

import {
  useNavigation
} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function handleScreen(screen: any) {
    navigation.navigate(screen)
  }
  return(
    <View
      style={styles.container}
    >
      <Text
        style={styles.text}
      >
        Home
      </Text>

      <Button
        title='Home'
        onPress={() => handleScreen('Home')}
      />
      <Button
        title='Camera'
        onPress={() => handleScreen('Camera')}
      />
      <Button
        title='Maps'
        onPress={() => handleScreen('Maps')}
      />
      <Button
        title='Notifications'
        onPress={() => handleScreen('Notifications')}
      />
      <Button
        title='Slide Animation'
        onPress={() => handleScreen('Slide Animation')}
      />
      <Button
        title='Slide Horizontal Animation'
        onPress={() => handleScreen('Slide Horizontal Animation')}
      />
      <Button
        title='Drag Effects'
        onPress={() => handleScreen('Drag Effects')}
      />
      <Button
        title='Breathe Effect'
        onPress={() => handleScreen('Breathe Effect')}
      />
    </View>
  )
};