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
          How to contact us?
        </Typography>
        <Typography>
          You can contact us through Live Chat via{' '}
          <span>Facebook Messenger</span> by clicking on the{' '}
          <span>Facebook Messenger</span> icon in the bottom right of the
          screen.
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

      <Box mb={5}>
        <Typography variant="h6" mb={1} fontWeight={700}>
          How to purchase a pack
        </Typography>
        <Typography>Explanation..</Typography>
      </Box>
    </div>
  )
}

export default About
