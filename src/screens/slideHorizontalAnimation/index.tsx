import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

import Animated, {
  useSharedValue
} from 'react-native-reanimated';

import Products from './Products'
import Card from './Card';
import Cards from './components/Cards';

import { products } from './Model'

const SlideHorizontalAnimation = () => {
  const translateX = useSharedValue(0)
  return(
    <Animated.View>
      <Animated.ScrollView>
        { products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </Animated.ScrollView>
      <Products x={translateX} />
      <ScrollView>
        <Cards />
      </ScrollView>
    </Animated.View>
  )
}

export default SlideHorizontalAnimation;