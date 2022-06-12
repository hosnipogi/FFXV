import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'
import { PAYPAL_CLIENT_ID } from 'config'
import useModal from 'hooks/useModal'

const paypalConfig = {
  'client-id': PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
}

type Props = {
  sku: string
  price: string
  description?: string
  title?: string
}

const PaypalButton = ({ sku, price }: Props) => {
  const [{ isPending }] = usePayPalScriptReducer()
  const { setModalOptions } = useModal()
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      mt="12px"
      mb={0}
      sx={{ height: 56, width: '100%' }}
    >
      {isPending ? (
        <CircularProgress />
      ) : (
        <Box sx={{ width: '100%' }}>
          <PayPalButtons
            style={{
              color: 'gold',
              layout: 'horizontal',
              height: 50,
              tagline: false,
              shape: 'rect',
            }}
            disabled={false}
            fundingSource={undefined}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: sku,
                    amount: {
                      value: price,
                    },
                  },
                ],
              })
            }}
            onApprove={async (data, actions) => {
              return actions.order.capture().then(function () {
                setModalOptions({
                  header: `Checkout`,
                  sku,
                  orderCompleted: true,
                })
              })
            }}
          />
        </Box>
      )}
    </Stack>
  )
}

const WithPaypalProvider = ({ sku, price }: Props) => {
  return (
    <PayPalScriptProvider options={paypalConfig}>
      <PaypalButton sku={sku} price={price} />
    </PayPalScriptProvider>
  )
}

export default WithPaypalProvider
