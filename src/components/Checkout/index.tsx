import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import PaypalButton from 'components/PaypalButton'

type Props = {
  dataTitle: string
  dataDescription: string
  dataPrice: string
}

export default function CustomizedDialogs(props: Props) {
  const { dataTitle, dataDescription, dataPrice } = props
  return (
    <div>
      <Box py={2}>
        <Typography>You are about to Purchase:</Typography>
        <Typography gutterBottom>{dataTitle}</Typography>
        <Typography gutterBottom>{dataDescription}</Typography>
        <Typography gutterBottom>{`USD ${dataPrice}`}</Typography>
      </Box>
      <Divider />
      <Typography gutterBottom py={4}>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      <Divider />
      <PaypalButton />
    </div>
  )
}
