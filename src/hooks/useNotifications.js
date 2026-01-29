import { useState, useEffect, useRef } from 'react'

export function useNotifications() {
  const [permission, setPermission] = useState('default')
  const [subscribed, setSubscribed] = useState(false)
  const permissionRef = useRef(permission)

  useEffect(() => {
    permissionRef.current = permission
  }, [permission])

  useEffect(() => {
    if ('Notification' in window) {
      const currentPermission = Notification.permission
      if (currentPermission !== permissionRef.current) {
        setTimeout(() => setPermission(currentPermission), 0)
      }
    }
  }, [])

  const requestPermission = async () => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission()
      setPermission(result)
      return result === 'granted'
    }
    return false
  }

  const subscribe = async () => {
    const granted = await requestPermission()
    if (granted) {
      setSubscribed(true)
      
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        try {
          const registration = await navigator.serviceWorker.ready
          const vapidKey = import.meta.env?.VITE_VAPID_PUBLIC_KEY
          if (!vapidKey) {
            console.warn('VITE_VAPID_PUBLIC_KEY not found in environment variables')
            return true
          }
          
          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: vapidKey
          })
          
          console.log('Push subscription:', subscription)
          return true
        } catch (error) {
          console.error('Push subscription error:', error)
        }
      }
    }
    return false
  }

  const showNotification = (title, options = {}) => {
    if (permission === 'granted') {
      new Notification(title, {
        icon: '/logo.jpeg',
        badge: '/logo.jpeg',
        tag: 'ronss-signal',
        renotify: true,
        ...options
      })
    }
  }

  const sendSignalNotification = (signal) => {
    showNotification('🚀 New Signal Alert', {
      body: `${signal.pair} ${signal.type} at ${signal.entry}`,
      requireInteraction: true,
      actions: [
        {
          action: 'view',
          title: 'View Signal'
        },
        {
          action: 'dismiss',
          title: 'Dismiss'
        }
      ]
    })
  }

  return {
    permission,
    subscribed,
    requestPermission,
    subscribe,
    showNotification,
    sendSignalNotification
  }
}
