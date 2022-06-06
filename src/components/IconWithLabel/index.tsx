import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
  iconComponent: React.ReactNode
  label: string
}

const IconWithLabel: React.FC<Props> = ({ iconComponent, label }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
      {iconComponent}
      <Typography variant="h5">{label}</Typography>
    </Box>
  )
}

export default IconWithLabel
