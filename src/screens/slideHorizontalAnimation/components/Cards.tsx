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
    caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    picture: require('../assets/cards/b.jpg'),
    caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    picture: require('../assets/cards/c.jpeg'),
    caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    picture: require('../assets/cards/d.jpeg'),
    caption: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
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