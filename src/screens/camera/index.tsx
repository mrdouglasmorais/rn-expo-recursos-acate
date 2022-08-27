import { 
  View, 
  Text 
} from 'react-native';

import styles from './style';

export default function Camera() {
  return(
    <View
      style={styles.container}
    >
      <Text
        style={styles.text}
      >
        Camera
      </Text>
    </View>
  )
};