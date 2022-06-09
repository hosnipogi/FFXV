import React from 'react'
import Grid from '@mui/material/Grid'
import Card from 'components/Card'

// import useModal from 'hooks/useModal'
// import { ModalOverlay } from 'components/Modal'

const Packs = ({ contents }: { contents: any }) => {
  return (
    <Grid
      container
      spacing={{ xs: 3, md: 4 }}
      columns={{ xs: 4, sm: 8, lg: 12 }}
    >
      {contents.map((item, index) => {
        return (
          <Grid item xs={12} sm={4} lg={4} key={index}>
            <Card content={item} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Packs
