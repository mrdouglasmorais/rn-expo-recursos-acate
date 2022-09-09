export interface IProduct {
  title: string;
  subtitle: string;
  color1: string;
  color2: string;
  picture: number;
  ratio: number;
}

export const products = [
  {
    title: 'Hamburgue A',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    color1: '#F9AC8A',
    color2: '#FBC6AE',
    picture: require('./assets/hamburguer1.png'),
    ratio: 1    
  },
  {
    title: 'Hamburgue B',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    color1: '#4DD2A5',
    color2: '#63D8B0',
    picture: require('./assets/hamburguer2.png'),
    ratio: 1    
  },
  {
    title: 'Hamburgue C',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    color1: '#FEB829',
    color2: '#FDD446',
    picture: require('./assets/hamburguer3.png'),
    ratio: 757 / 735   
  },
]