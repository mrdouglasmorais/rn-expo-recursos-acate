import {
  StatusBar
} from 'expo-status-bar';

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
        contentContainerStyle={{ height: (itens.length + 0.25) * MAX_HEIGHT }}
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