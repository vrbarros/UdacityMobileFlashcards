import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

import { NOTIFICATION_KEY } from './constants';

export function setAppNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let dayNotification = new Date();
            dayNotification.setDate(dayNotification.getDate() + 1);
            dayNotification.setHours(21);
            dayNotification.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(
              {
                title: 'Já lembrou de estudar hoje?',
                body: 'Não esqueça de fazer seus testes!',
                ios: {
                  sound: true,
                },
                android: {
                  sound: true,
                  sticky: false,
                  vibrate: true,
                  priority: 'high',                  
                },
              },
              {
                time: dayNotification,
                repeat: 'day',
              },
            );
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
