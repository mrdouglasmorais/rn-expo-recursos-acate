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
    subtitle: 'Hamburguer, Bacon, Salada',
    color1: '#F9AC8A',
    color2: '#FBC6AE',
    picture: require('./assets/hamburguer1.png'),
    ratio: 1    
  },
  {
    title: 'Hamburgue B',
    subtitle: 'Hamburguer, Bacon, Salada',
    color1: '#4DD2A5',
    color2: '#63D8B0',
    picture: require('./assets/hamburguer1.png'),
    ratio: 1    
  },
  {
    title: 'Hamburgue C',
    subtitle: 'Hamburguer, Bacon, Salada',
    color1: '#FEB829',
    color2: '#FDD446',
    picture: require('./assets/hamburguer1.png'),
    ratio: 757 / 735   
  },
]