import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

const paypalConfig = {
  'client-id':
    'AeprjWcnsX-jJX6MdLjSNztANSDTamgokeOdBSQrcojtvjCNyUw3CWiCRakdksC2OQEdmmlWj88hZAcn',
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
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      mt={2}
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
            // forceReRender={[amount, currency, style]}
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
                console.log('okay')
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
