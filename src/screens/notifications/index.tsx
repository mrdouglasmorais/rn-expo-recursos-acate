import { 
  View, 
  Text,
  Button,
  Platform
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
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true
  })
})

export default function NotificationsApp(){
  const [ expoToken, setExpoToken ] = useState<string | undefined>('');
  const [ notification, setNotification ] = useState<any>(false);
  const notificationListener = useRef<any>();
  const resposeListener = useRef<any>();

  useEffect(() =>{
    registerForPushNotificationsAsync().then( token => setExpoToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        setNotification(notification)
      }
    )

    resposeListener.current = Notifications.addNotificationResponseReceivedListener(
      response => console.log(response)
    )

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(resposeListener.current)
    }
  })


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
        onPress={ async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  )
}

async function schedulePushNotification(){
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Olá Acate",
      body: 'Eu sou uma notificação',
      sound: '../../assets/notifications.wav',
      data: { data: 'Qualquer coisa'},
      vibrate: [0, 250, 250, 250],
    },
    trigger: { seconds: 5 }
  })
};

async function registerForPushNotificationsAsync(){
  let token;
  if(Device.isDevice){
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if(existingStatus !== 'granted'){
      const { status} = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if(existingStatus === 'granted'){
      return
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('token da notificacão', token);
    console.log('status do dispositivo', finalStatus);
  } else {
    alert('Use um dispositivo fisico para visualizar')
  }

  if(Platform.OS === 'android'){
    await Notifications.setNotificationChannelAsync('default' , {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C'
    })
  }

  return token;
}