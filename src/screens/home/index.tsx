import { 
  View, 
  Text 
} from 'react-native';

import styles from './style';

export default function Home() {
  return(
    <View
      style={styles.container}
    >
      <Text
        style={styles.text}
      >
        Home
      </Text>
    </View>
  )
};