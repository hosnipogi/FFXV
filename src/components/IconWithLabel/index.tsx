import React from 'react'
import Stack, { StackProps } from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type Props = {
  iconComponent: React.ReactNode
  label: string
} & StackProps

const IconWithLabel: React.FC<Props> = (props) => {
  const { iconComponent, label, sx } = props
  return (
    <Stack sx={sx} mb={3} flexDirection="row" alignItems="center">
      {iconComponent}
      <Typography variant="h5">{label}</Typography>
    </Stack>
  )
}

export default IconWithLabel
