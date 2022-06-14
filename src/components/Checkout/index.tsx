import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import PaypalButton from 'components/PaypalButton'
import Image from 'components/Image'
import Link from 'components/NextLink'
import useIsMobile from 'hooks/useIsMobile'
import useModal from 'hooks/useModal'
import { Links } from 'config'
import OnSuccessComponent from './OnSuccess'
import CryptoPaymentComponent from './CryptoPayment'

type Props = {
  dataTitle: string
  dataDescription: string
  dataPrice: string
  dataImage: string
  dataSku: string
}

export default function CustomizedDialogs(props: Props) {
  const { dataImage, dataTitle, dataDescription, dataPrice, dataSku } = props
  const [modal, setModal] = useState<React.ReactNode>()
  const {
    options: { orderCompleted },
  } = useModal(modal)
  const isMobile = useIsMobile()

  const handleCryptoPaymentMethod = () => {
    setModal(<CryptoPaymentComponent />)
  }

  return (
    <>
      {!orderCompleted ? (
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
            <Image
              src={dataImage}
              height="140px"
              width="140px"
              alt={dataTitle}
            />
            <Box>
              <Typography variant="caption">
                You are about to Purchase:
              </Typography>
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
            Checkout the <Link to={`/${Links.FAQ.toLowerCase()}`}>FAQ</Link>{' '}
            page for more information on how to transact.
          </Typography>
          <PaypalButton
            sku={dataSku}
            price={dataPrice}
            description={dataDescription}
            title={dataTitle}
          />
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="text"
              onClick={handleCryptoPaymentMethod}
              size="small"
            >
              Pay with Crypto
            </Button>
          </Box>
        </div>
      ) : (
        <OnSuccessComponent />
      )}
    </>
  )
}
