import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');

export const cards = [
  {
    picture: require('./cards/a.jpeg'),
    caption: 'Um monte de comida e eu com fome :('
  },
  {
    picture: require('./cards/b.jpg'),
    caption: 'Um monte de comida e eu com fome :('
  },
  {
    picture: require('./cards/c.jpeg'),
    caption: 'Um monte de comida e eu com fome :('
  },
  {
    picture: require('./cards/d.jpeg'),
    caption: 'Um monte de comida e eu com fome :('
  }
]

interface CardProps {
  picture: ReturnType<typeof require>
  caption: string;
}

const Card = ({ picture, caption }: CardProps) => {
  return (
    <>
      <View>
        <Image source={picture} />
      </View>
      <View>
        <Text>{caption}</Text>
      </View>
    </>
  )
}

const Cards = () => {
  return (
    <View>
      <Text>Cards</Text>
    </View>
  )
}

export default Cards;