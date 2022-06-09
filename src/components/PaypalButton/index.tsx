import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const paypalConfig = {
  'client-id':
    'AeprjWcnsX-jJX6MdLjSNztANSDTamgokeOdBSQrcojtvjCNyUw3CWiCRakdksC2OQEdmmlWj88hZAcn',
  currency: 'USD',
  intent: 'capture',
}

const PaypalButton = () => {
  return (
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
              description: 'test',
              amount: {
                value: '2',
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
  )
}

const WithPaypalProvider = () => {
  return (
    <PayPalScriptProvider options={paypalConfig}>
      <PaypalButton />
    </PayPalScriptProvider>
  )
}

export default WithPaypalProvider
