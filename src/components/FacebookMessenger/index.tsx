import React from 'react'
import { MessengerChat } from 'react-messenger-chat-plugin'
import { FBConfig } from 'config/facebookChat'

let url = ''
const FBMessenger = () => {
  if (typeof window !== 'undefined') {
    url = window.location.hostname
  }

  if (process.env.NODE_ENV !== 'development' && url !== 'localhost') {
    return (
      <MessengerChat
        pageId={FBConfig.ID}
        themeColor="#4C7DDC"
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={'show'}
        debugMode={true}
        onMessengerShow={() => {
          console.log('onMessengerShow')
        }}
        onMessengerHide={() => {
          console.log('onMessengerHide')
        }}
        onMessengerDialogShow={() => {
          console.log('onMessengerDialogShow')
        }}
        onMessengerDialogHide={() => {
          console.log('onMessengerDialogHide')
        }}
        onMessengerMounted={() => {
          console.log('onMessengerMounted')
        }}
        onMessengerLoad={() => {
          console.log('onMessengerLoad')
        }}
      />
    )
  }

  return null
}

export default React.memo(FBMessenger)
