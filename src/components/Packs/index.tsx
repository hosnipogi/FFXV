import React, { useCallback, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from 'components/Card'
import content from '../../../contents/packs.json'
import useModal from 'hooks/useModal'
import { ModalOverlay } from 'components/Modal'

const Packs = () => {
  const [modal, setModal] = useState<React.ReactNode>()
  const { setModalOpen } = useModal(modal)

  const handleModal = useCallback(
    (node: React.ReactNode) => {
      setModal(node)
      setModalOpen()
    },
    [setModalOpen]
  )

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, lg: 12 }}
    >
      {content.map((item, index) => {
        const cardNode = <Card content={item} />
        return (
          <Grid
            item
            xs={12}
            sm={4}
            lg={4}
            key={index}
            onClick={() => handleModal(<ModalOverlay component={cardNode} />)}
            sx={{ cursor: 'pointer' }}
          >
            {cardNode}
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Packs
