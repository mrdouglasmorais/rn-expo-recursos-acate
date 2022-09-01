import { 
  View, 
  Text,
  Button
} from 'react-native';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import {
  useState,
  useEffect,
  useRef
} from 'react';

import styles from './style';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    handleShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowAlert: false
  })
})

export default function NotificationsApp(){
  const [ expoToken, setExpoToken ] = useState<string>('');
  const [ notification, setNotification ] = useState<boolean>(false);
  const notificationListener = useRef();
  const resposeListener = useRef();


  useEffect(() => console.log('Notifications'))
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.text}
      >
        Token: { expoToken && expoToken }
      </Text>
      <View
        style={styles.notificationDataContent}
      >
        <Text>
          Title:  
        </Text>
        <Text>
          Body: 
        </Text>
        <Text>
          Data: 
        </Text>
      </View>
      <Button
        title="Notifications"
        onPress={ () => alert("Notifications")}
      />
    </View>
  )
}