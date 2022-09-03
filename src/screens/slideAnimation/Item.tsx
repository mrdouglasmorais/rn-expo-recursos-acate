import {
  View,
  Text,
  Image,
  Dimensions,
  Alert
} from 'react-native';

import {
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated';

export interface Item {
  title: string;
  subtitle: string;
  picture: number;
  top: number;
}

interface ItemProps {
  item: Item;
  y: Animated.SharedValue<number>;
  index: number;
}

const Item = ({ y, index, item: { title, subtitle, picture } }: ItemProps) => {
  
  
  return(
    <TouchableWithoutFeedback onPress={ () => Alert.alert('Pressionado')}>
      <Animated.View>
        <Image
          source={picture}
        />
        <View>
          <Text>{subtitle.toUpperCase()}</Text>
          <Animated.View>
            <Text>{title.toUpperCase()}</Text>
          </Animated.View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default Item