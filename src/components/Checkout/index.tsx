import * as React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import PaypalButton from 'components/PaypalButton'
import Image from 'components/Image'
import useIsMobile from 'hooks/useIsMobile'

type Props = {
  dataTitle: string
  dataDescription: string
  dataPrice: string
  dataImage: string
  dataSku: string
}

export default function CustomizedDialogs(props: Props) {
  const { dataImage, dataTitle, dataDescription, dataPrice, dataSku } = props
  const isMobile = useIsMobile()

  return (
    <div>
      <Box
        py={2}
        sx={{
          display: 'inline-flex',
          gap: 2,
          alignItems: 'flex-start',
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Image src={dataImage} height="140px" width="140px" alt={dataTitle} />
        <Box>
          <Typography variant="caption">You are about to Purchase:</Typography>
          <Typography gutterBottom>{dataTitle}</Typography>
          <Typography variant="subtitle2" gutterBottom>
            {dataDescription}
          </Typography>
          <Typography
            variant="subtitle2"
            color="gold"
            gutterBottom
          >{`USD ${dataPrice}`}</Typography>
        </Box>
      </Box>
      <Divider sx={{ borderColor: 'border.secondary' }} />
      <Typography gutterBottom py={4}>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      <Divider sx={{ borderColor: 'border.secondary' }} />
      <PaypalButton
        sku={dataSku}
        price={dataPrice}
        description={dataDescription}
        title={dataTitle}
      />
    </div>
  )
}
