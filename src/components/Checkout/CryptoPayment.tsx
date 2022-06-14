import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Image from 'components/Image'
import Link from 'components/NextLink'
import useIsMobile from 'hooks/useIsMobile'
import { BinanceUSDT, Coinbase } from 'config'
import useModal from 'hooks/useModal'

type CryptoPaymentType = 'Coinbase' | 'Binance'

const CryptoPaymentComponent = () => {
  const [amount, setAmount] = useState('')
  const isMobile = useIsMobile()
  const {
    options: { price },
  } = useModal()

  useEffect(() => {
    switch (price.substring(0, 2)) {
      case '26':
        setAmount('twenty')
        break
      case '50':
        setAmount('fifty')
        break
      case '79':
        setAmount('seventy')
        break
      default:
        setAmount('fifty')
    }
  }, [price])

  return (
    <Box>
      {isMobile ? (
        <Stack divider={<Divider sx={{ borderColor: 'border.secondary' }} />}>
          <MobileView amount={amount} />
        </Stack>
      ) : (
        <Stack
          direction="row"
          gap={2}
          divider={
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderColor: 'border.secondary' }}
            />
          }
        >
          <Box sx={{ width: '55%' }}>
            <Image
              height="100%"
              width="100%"
              src={`/images/binancePay-USDT-${BinanceUSDT[amount]}`}
              alt="binance pay"
            />
          </Box>
          <Box sx={{ width: '45%' }}>
            <Typography variant="h5" textAlign="center" mt={2}>
              Coinbase Pay
            </Typography>
            <Typography mt={10} textAlign="center">
              Click{' '}
              <Link
                to={`https://commerce.coinbase.com/checkout/${Coinbase[amount]}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                here
              </Link>{' '}
              to pay with Coinbase.
            </Typography>
          </Box>
        </Stack>
      )}
      <Divider sx={{ borderColor: 'border.secondary', my: 4 }} />
      <Typography gutterBottom mt={4}>
        After payment, please click on the{' '}
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
}

const MobileView = ({ amount }: { amount: string }) => {
  const [payment, setPayment] = useState<CryptoPaymentType>('Coinbase')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value as CryptoPaymentType)
  }

  return (
    <>
      <Typography>Select Crypto Payment Method</Typography>
      <RadioGroup
        defaultValue={'Coinbase'}
        value={payment}
        onChange={handleChange}
        defaultChecked
      >
        <Stack gap={3} direction="row">
          <Stack direction="row" alignItems="center">
            <Radio value="Coinbase" />
            <Typography>Coinbase</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Radio value="Binance" />
            <Typography>Binance</Typography>
          </Stack>
        </Stack>
      </RadioGroup>
      <Box mt={2}>
        {payment === 'Binance' ? (
          <Box sx={{ maxWidth: '400px', marginInline: 'auto' }}>
            <Image
              height="100%"
              width="100%"
              src={`/images/binancePay-USDT-${BinanceUSDT[amount]}`}
              alt="binance pay"
            />
          </Box>
        ) : payment === 'Coinbase' ? (
          <Typography my={4} textAlign="center">
            Click{' '}
            <Link
              to={`https://commerce.coinbase.com/checkout/${Coinbase[amount]}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              here
            </Link>{' '}
            to pay with Coinbase.
          </Typography>
        ) : null}
      </Box>
    </>
  )
}

export default CryptoPaymentComponent
