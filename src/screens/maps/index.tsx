import { useState } from 'react';

import { 
  View, 
  Text,
  Image 
} from 'react-native';

import styles from './style';

import MapView, {
  Marker,
  Callout,
  PROVIDER_GOOGLE
} from 'react-native-maps';

import { 
  ILocalization
} from '../../types';

export default function Maps() {
  const [ find, setFind ] = useState<ILocalization>({
    latitude: -27.5448985,
    longitude: -48.5023547,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })
  return(
    <View
      style={styles.container}
    >
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={find}
      >
        <Marker
          // image={require('../../assets/pin.png')}
          coordinate={{
            latitude: -27.5448985,
            longitude: -48.5023547,
          }}
        >
          <Callout>
            <View>
              <Text
                style={styles.textCallout}
              >
                Acate
              </Text>
              <Image 
                source={require('../../assets/acate.png')}
                style={styles.logo}
              />
            </View>
          </Callout>
        </Marker>

      </MapView>
    </View>
  )
};