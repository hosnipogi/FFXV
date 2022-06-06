import React, { ImgHTMLAttributes } from 'react'
import Box from '@mui/material/Box'
// import Container from '@mui/material/Container'

const ImageComponent: React.FC<ImgHTMLAttributes<any> & { radius?: number }> = (
  props
) => {
  return (
    <Box
      sx={{
        maxWidth: props.width,
        minHeight: props.height,
      }}
    >
      <Box
        {...props}
        width="100%"
        height="100%"
        component="img"
        sx={{ objectFit: 'cover', borderRadius: props.radius || 3 }}
        src={`/images${props.src}`}
        alt={props.alt ? props.alt : 'Generic Image'}
      />
    </Box>
  )
}

export default ImageComponent
