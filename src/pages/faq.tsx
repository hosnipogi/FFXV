import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import IconWithLabel from 'components/IconWithLabel'
import QuizIcon from '@mui/icons-material/Quiz'

const About = () => {
  return (
    <div>
      <IconWithLabel
        iconComponent={<QuizIcon sx={{ marginRight: 1 }} color="warning" />}
        label="Frequently Asked Questions"
      />
      <Divider sx={{ mb: 4 }} />

      <Box mb={5}>
        <Typography variant="h6" mb={1} fontWeight={700}>
          How to purchase a pack?
        </Typography>
        <Typography>
          Take note of the SKU number before purchase. After selection, proceed
          with payment through either of the following methods of payment:{' '}
          <Span color="warning.main">Paypal</Span>,{' '}
          <Span color="warning.main">Binance Pay</Span>,{' '}
          <Span color="warning.main">Coinbase Pay</Span>.
        </Typography>
        <Typography mt={2}>
          After payment, please message us through{' '}
          <Span color="facebook.default">Facebook Messenger</Span> the SKU
          number of the pack and your FFXV login account and password.
        </Typography>
      </Box>

      <Box mb={5}>
        <Typography variant="h6" mb={1} fontWeight={700}>
          How to contact us?
        </Typography>
        <Typography>
          You can contact us through Live Chat via{' '}
          <Span color="facebook.default">Facebook Messenger</Span> by clicking
          on the <Span color="facebook.default">Facebook Messenger</Span> icon
          in the bottom right of the screen.
        </Typography>
      </Box>

      <Box mb={5}>
        <Typography variant="h6" mb={1} fontWeight={700}>
          How we work?
        </Typography>
        <Typography>
          We must log into your account to help you purchase. So we need your
          login account and password. Only in this way can we finish your order.
        </Typography>
      </Box>

      <Box mb={5}>
        <Typography variant="h6" mb={1} fontWeight={700}>
          Why Buy Final Fantasy XV packs from us?
        </Typography>
        <Typography>Explanation..</Typography>
      </Box>
    </div>
  )
}

type SpanProps = {
  color?: string
  children: React.ReactNode
}

const Span = (props: SpanProps) => {
  const { color, children } = props
  return (
    <Typography color={color} component="span">
      {children}
    </Typography>
  )
}

export default About
