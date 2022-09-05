// import {
//   View,
//   Text,
//   StyleSheet
// } from 'react-native';

import {
  StatusBar
} from 'expo-status-bar';

// import {
//   ScrollView
// } from 'react-native-gesture-handler';

import Animated, { 
  useSharedValue,
  useAnimatedScrollHandler
} from 'react-native-reanimated'

import Item, { MAX_HEIGHT } from './Item';
import { itens } from './Model'

export default function SlideAnimation() {

  const y = useSharedValue(0);
  
  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      y.value = e.contentOffset.y
    }
  })

  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        style={{ backgroundColor: '#000'}}
        contentContainerStyle={{ height: (itens.length + 1) * MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={onScroll}
        decelerationRate='normal'
      >
        {itens.map((item, index) => (
          <Item index={index} y={y} item={item} key={index} />
        ))}
      </Animated.ScrollView>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     height: itens.length * MAX_HEIGHT,
//     backgroundColor: '#000',
//   }
// })