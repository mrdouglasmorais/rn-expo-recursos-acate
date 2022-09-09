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
    picture: require('../assets/cards/a.jpeg'),
    caption: 'Um monte de comida e eu com fome :('
  },
  {
    picture: require('../assets/cards/b.jpg'),
    caption: 'Um monte de comida e eu com fome :('
  },
  {
    picture: require('../assets/cards/c.jpeg'),
    caption: 'Um monte de comida e eu com fome :('
  },
  {
    picture: require('../assets/cards/d.jpeg'),
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
      <View style={styles.container}>
        <Image source={picture}  style={styles.image}/>
      </View>
      <View style={styles.caption}>
        <Text style={styles.text}>{caption}</Text>
      </View>
    </>
  )
}

const Cards = () => {
  return (
    <View>
      {cards.map( ({picture, caption}, index) => (
        <Card key={index} picture={picture} caption={caption} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 12,
    height: width
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  caption:{
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 16
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#432406'
  }
})

export default Cards;