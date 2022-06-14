import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import IconWithLabel from 'components/IconWithLabel'

const OnSuccessComponent = () => (
  <Box py={2}>
    <IconWithLabel
      iconComponent={
        <CheckCircleOutlineIcon
          sx={{ marginRight: 1 }}
          color="success"
          height="64px"
        />
      }
      label="Success"
    />
    <Divider sx={{ borderColor: 'border.secondary' }} />
    <Typography gutterBottom mt={4}>
      Please click on the{' '}
      <Typography color="facebook.default" component="span">
        Facebook Messenger Icon
      </Typography>{' '}
      at the bottom right of the screen and send us the{' '}
      <Typography color="gold" component="span">
        SKU Number
      </Typography>{' '}
      along with your account details to proceed with funding your account.
    </Typography>
  </Box>
)

export default OnSuccessComponent
