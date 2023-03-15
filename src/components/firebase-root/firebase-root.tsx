/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { firebaseApp, vapidKey } from '../../firebase'
import { getMessaging, getToken, Messaging } from 'firebase/messaging';

interface IFirebaseRoot {
  children: React.ReactNode
}

export const FirebaseRoot: React.FC<IFirebaseRoot> = ({ children }): JSX.Element => {

  function requestPermission() {
    const messaging: Messaging = getMessaging(firebaseApp)
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken(messaging, { vapidKey }).then(() => {
          console.log('success')
        }).catch(() => {
          console.log('error')
        })
      } else if ('denied') {
        console.warn('Notification permission denied.')
      }
    })
  }

  useEffect(() => {
    requestPermission()
  }, [])

  return <>{children}</>
}
