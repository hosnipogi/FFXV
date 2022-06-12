import React from 'react'
import { useTheme } from '@mui/material/styles'
import { MessengerChat } from 'react-messenger-chat-plugin'
import { FACEBOOK_ID } from 'config'

let url = ''
const FBMessenger = () => {
  const theme = useTheme()
  if (typeof window !== 'undefined') {
    url = window.location.hostname
  }

  if (process.env.NODE_ENV !== 'development' && url !== 'localhost') {
    return (
      <MessengerChat
        pageId={FACEBOOK_ID}
        themeColor={theme.palette.facebook.default}
        loggedInGreeting=""
        loggedOutGreeting=""
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
