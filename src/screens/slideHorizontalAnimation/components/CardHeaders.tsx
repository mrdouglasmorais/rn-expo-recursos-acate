import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { 
  Feather as Icon 
} from '@expo/vector-icons';

const CardHeader = () => {
  return(
    <View
      style={styles.container}
    >
      <View>
        <Text>RECOMENDADO</Text>
        <View>
          <Icon name="edit" size={16} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  title: {},
  action: {},
})

export default CardHeader;