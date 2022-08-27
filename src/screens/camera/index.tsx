import {
  useState,
} from  'react'

import { 
  View, 
  Text,
  TouchableOpacity,
  Modal,
  Button
} from 'react-native';

import { 
  Camera, 
  CameraType 
} from 'expo-camera';

import styles from './style';

export default function CameraScreen() {
  const [ type, setType] = useState(CameraType.back);
  const [ permission, requestPermission ] = Camera.useCameraPermissions();

  if (!permission) {
    return(
      <View style={styles.container}>
        <Text>Sem premissões</Text>
      </View>
    )
  }

  if(!permission.granted){
    return(
      <View
        style={styles.container}
      >
        <Modal
          animationType='slide'
        >
          <Text>
            É necessário da permissões para acessar recursos do seu dispositivo
          </Text>
          <Button
            title='Permitir'
            onPress={requestPermission}
          />
        </Modal>
      </View>
    )
  }

  return(
    <View
      style={styles.container}
    >
      <Camera
        type={type}
        style={styles.camera}
      >
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={ () => {
              setType( type === CameraType.back ?  CameraType.front : CameraType.back );
            }}
          >
            <Text
              style={styles.buttonText}
            >
              Mudar camera
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
};